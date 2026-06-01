import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Categories mapping
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
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, excerpt, content, category, tags, image_url, author_id, status = "published" } = body;

    if (!title || !content || !author_id) {
      return NextResponse.json(
        { error: "Missing required fields: title, content, author_id" },
        { status: 400 }
      );
    }

    const slug = generateSlug(title);
    const readTime = calculateReadTime(content);
    const categoryId = CATEGORIES[category?.toLowerCase()] || CATEGORIES.celebrity;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("articles")
      .insert({
        slug,
        title,
        excerpt: excerpt || content.slice(0, 200) + "...",
        content,
        author_id,
        category_id: categoryId,
        tags: tags || [],
        image: image_url || "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80",
        published_at: new Date().toISOString(),
        read_time: readTime,
        featured: false,
        popular: false,
        status,
        meta_title: title.slice(0, 60),
        meta_description: excerpt || content.slice(0, 160),
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      article: data,
      url: `/news/${data.slug}`,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
