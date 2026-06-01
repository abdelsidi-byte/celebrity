import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let articleCount = 0;
  let publishedCount = 0;
  let categoryCount = 0;

  try {
    const supabase = await createClient();

    // Check if Supabase is configured by checking if we can make queries
    const { data: articles } = await supabase
      .from("articles")
      .select("id", { count: "exact" });

    const { data: categories } = await supabase
      .from("categories")
      .select("id", { count: "exact" });

    const { data: publishedArticles } = await supabase
      .from("articles")
      .select("id")
      .eq("status", "published");

    articleCount = articles?.length || 0;
    categoryCount = categories?.length || 0;
    publishedCount = publishedArticles?.length || 0;
  } catch (e) {
    // Supabase not configured - show zeros
  }

  return (
    <div>
      <h1 className="font-playfair text-3xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <div className="text-gray-400 text-sm mb-1">Total Articles</div>
          <div className="text-3xl font-bold text-white">{articleCount}</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <div className="text-gray-400 text-sm mb-1">Published</div>
          <div className="text-3xl font-bold text-white">{publishedCount}</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 p-6">
          <div className="text-gray-400 text-sm mb-1">Categories</div>
          <div className="text-3xl font-bold text-white">{categoryCount}</div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href="/admin/articles/new"
          className="px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
        >
          New Article
        </Link>
        <Link
          href="/admin/categories"
          className="px-6 py-3 bg-gray-800 text-white font-bold uppercase tracking-wider hover:bg-gray-700 transition-colors"
        >
          Manage Categories
        </Link>
      </div>
    </div>
  );
}