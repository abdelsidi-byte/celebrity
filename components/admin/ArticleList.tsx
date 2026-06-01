"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface Article {
  id: string;
  slug: string;
  title: string;
  status: "draft" | "published";
  category: { name: string };
  published_at: string | null;
  created_at: string;
}

export function ArticleList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("articles")
      .select("*, category:categories(name)")
      .order("created_at", { ascending: false });
    setArticles(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    const supabase = createClient();
    await supabase.from("articles").delete().eq("slug", slug);
    fetchArticles();
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-playfair text-2xl font-bold text-white">Articles</h1>
        <Link
          href="/admin/articles/new"
          className="px-4 py-2 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
        >
          New Article
        </Link>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 text-sm font-medium p-4">Title</th>
              <th className="text-left text-gray-400 text-sm font-medium p-4">Category</th>
              <th className="text-left text-gray-400 text-sm font-medium p-4">Status</th>
              <th className="text-left text-gray-400 text-sm font-medium p-4">Date</th>
              <th className="text-right text-gray-400 text-sm font-medium p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id} className="border-b border-gray-800 last:border-0">
                <td className="p-4">
                  <span className="text-white font-medium">{article.title}</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-400 text-sm">{article.category?.name}</span>
                </td>
                <td className="p-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-1 ${
                      article.status === "published"
                        ? "bg-green-600/20 text-green-500"
                        : "bg-yellow-600/20 text-yellow-500"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-gray-500 text-sm">
                    {/* Use UTC methods to avoid hydration mismatch */}
                    {new Date(article.created_at).toLocaleDateString("en-US", { timeZone: "UTC" })}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link
                    href={`/admin/articles/${article.slug}/edit`}
                    className="text-gray-400 hover:text-white transition-colors text-sm mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(article.slug)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {articles.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No articles yet. Create your first article.
          </div>
        )}
      </div>
    </div>
  );
}