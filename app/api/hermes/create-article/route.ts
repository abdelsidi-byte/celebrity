import { createClient } from "@/lib/supabase/server";
import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const anthropic = new Anthropic();

const CATEGORIES: Record<string, string> = {
  celebrity: "eefc9ead-c9c4-4e62-87f0-7d0088480714",
  movies: "67cf1fa9-12d0-454d-ab43-c297e446c5ea",
  tv: "bfc320be-568d-47b6-8abf-174df7a326cd",
  music: "7d6e5a83-3229-400a-8d37-7b6406b40839",
  fashion: "97e92701-45fe-4ff6-9413-97c24850a24e",
  royals: "71107179-18f0-46d0-8bea-4057f56706af",
};

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 100);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, category = "Celebrity", tags = [], image_url, author_id } = body;

    if (!topic || !author_id) {
      return NextResponse.json(
        { error: "Missing required fields: topic and author_id" },
        { status: 400 }
      );
    }

    // Generate article content using Claude
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4096,
      messages: [
        {
          role: "user",
          content: `You are a professional entertainment journalist for Style & Society, a celebrity news website. Write a compelling, engaging celebrity news article.

TOPIC: ${topic}
CATEGORY: ${category}

Requirements:
- Write in a professional journalistic style
- Include a headline (H1), subheadline, and body content
- Make it engaging and SEO-friendly
- Format with ## for section headers, - for bullet points
- Write 400-800 words
- Include realistic, specific details

Return plain text article content (NOT JSON). Format:
TITLE: Your headline here
EXCERPT: 2-3 sentence summary
---
Full article body with paragraphs...
`,
        },
      ],
    });

    // Handle different response formats
    let rawContent = "";
    if (message.content && Array.isArray(message.content)) {
      rawContent = message.content.map((block: any) => {
        if (block.type === "text") return block.text;
        if (typeof block === "string") return block;
        return JSON.stringify(block);
      }).join("\n");
    } else if (typeof message.content === "string") {
      rawContent = message.content;
    } else {
      rawContent = JSON.stringify(message.content);
    }

    console.log("Claude response:", rawContent.slice(0, 500));

    let articleData;
    try {
      // Try to parse as JSON first
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        articleData = JSON.parse(jsonMatch[0]);
      } else {
        // Fallback: use raw content directly
        articleData = {
          title: topic,
          excerpt: rawContent.slice(0, 200).trim() + "...",
          content: rawContent,
          meta_title: topic.slice(0, 60),
          meta_description: rawContent.slice(0, 160).trim(),
        };
      }
    } catch (e) {
      console.error("Parse error:", e);
      // Final fallback
      articleData = {
        title: topic,
        excerpt: rawContent.slice(0, 200).trim() || "Read more...",
        content: rawContent || `Article about ${topic}`,
        meta_title: topic.slice(0, 60),
        meta_description: rawContent.slice(0, 160).trim() || `Latest news about ${topic}`,
      };
    }

    const slug = generateSlug(articleData.title);
    const readTime = calculateReadTime(articleData.content);
    const categoryId = CATEGORIES[category.toLowerCase()] || CATEGORIES.celebrity;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("articles")
      .insert({
        slug,
        title: articleData.title,
        excerpt: articleData.excerpt,
        content: articleData.content,
        author_id,
        category_id: categoryId,
        tags: tags,
        image: image_url || "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
        published_at: new Date().toISOString(),
        read_time: readTime,
        featured: false,
        popular: false,
        status: "published",
        meta_title: articleData.meta_title,
        meta_description: articleData.meta_description,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      article: data,
      message: `Article "${data.title}" created successfully`,
    });
  } catch (error: any) {
    console.error("Error creating article:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create article" },
      { status: 500 }
    );
  }
}
