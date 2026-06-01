"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { searchArticles, Article } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Article[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      const searchResults = searchArticles(initialQuery);
      setResults(searchResults);
      setHasSearched(true);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      const searchResults = searchArticles(query);
      setResults(searchResults);
      setHasSearched(true);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-4">Search</h1>
          <p className="text-gray-400">
            Find the latest celebrity news and entertainment stories.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-lg focus:outline-none focus:border-red-600 transition-colors"
 />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Results */}
        <AnimatePresence mode="wait">
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {results.length > 0 ? (
                <>
                  <p className="text-gray-500 text-sm mb-8">
                    Found {results.length} article{results.length !== 1 ? "s" : ""} for "{query}"
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.map((article) => (
                      <ArticleCard key={article.id} article={article} variant="default" />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg mb-4">
                    No results found for "{query}"
                  </p>
                  <p className="text-gray-600 text-sm">
                    Try searching with different keywords.
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {!hasSearched && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Enter a search term to find articles.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 pb-12">
          <div className="max-w-[1280px] mx-auto px-4 text-center">
            <h1 className="font-playfair text-4xl mb-4">Search</h1>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
