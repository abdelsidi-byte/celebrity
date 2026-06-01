import { createClient } from "@/lib/supabase/server";
import { ArticleCard } from "@/components/articles/ArticleCard";
import Link from "next/link";
import { articles as staticArticles } from "@/lib/data/articles";

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
  let articles = staticArticles;

  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("articles")
      .select(`
        *,
        category:categories(id, name, slug, description, image)
      `)
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (data && data.length > 0) {
      const dbArticles = data.map((a: any) => ({
        id: a.id,
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        content: a.content,
        author: { name: 'Staff Writer', avatar: '', role: '' },
        category: a.category?.name || "Uncategorized",
        tags: a.tags || [],
        image: a.image,
        publishedAt: a.published_at,
        readTime: a.read_time || 5,
        featured: a.featured || false,
        popular: a.popular || false,
        videoUrl: a.video_url,
      }));
      // Combine DB articles with static articles
      articles = [...dbArticles, ...staticArticles].filter((article, index, self) =>
        index === self.findIndex((a) => a.id === article.id)
      );
    }
  } catch (e) {
    // Use static data
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-900/50 border-b border-gray-800 py-12">
        <div className="max-w-[1280px] mx-auto px-4">
          <h1 className="font-playfair text-4xl font-bold text-white mb-2">News</h1>
          <p className="text-gray-400">The latest celebrity news, entertainment, and more</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any, i: number) => (
            <ArticleCard
              key={`${article.id}-${i}`}
              article={article}
              variant="default"
              priority={i < 3}
            />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl mb-4">No articles published yet.</p>
            <Link href="/admin/articles/new" className="text-red-500 hover:text-red-400">
              Create your first article
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}