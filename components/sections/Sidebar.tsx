"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";

interface SidebarProps {
  trendingArticles: Article[];
  latestArticles: Article[];
}

export function Sidebar({ trendingArticles, latestArticles }: SidebarProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside className="space-y-8">
      {/* Trending Section */}
      <div className="bg-gray-900/50 border border-gray-800 p-5">
<h3 className="font-playfair text-xl mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600" />
          Trending Now
        </h3>
        <div>
          {trendingArticles.slice(0, 5).map((article, i) => (
            <ArticleCard key={`trending-${i}-${article.id}`} article={article} variant="compact" />
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-900/50 border border-gray-800 p-5">
        <h3 className="font-playfair text-xl mb-2">Get the Daily Six</h3>
        <p className="text-gray-400 text-sm mb-4">
          The essential gossip, delivered to your inbox every morning.
        </p>
        {subscribed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <span className="text-green-500 text-sm font-medium">
              Thanks for subscribing!
            </span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 transition-colors"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Latest Articles */}
      <div>
        <h3 className="font-playfair text-xl mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-600" />
          Latest
        </h3>
        <div className="space-y-4">
          {latestArticles.slice(0, 4).map((article, i) => (
            <ArticleCard key={`latest-sidebar-${i}-${article.id}`} article={article} variant="horizontal" />
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gray-900/50 border border-gray-800 p-5">
        <h3 className="font-playfair text-xl mb-4">Follow Us</h3>
        <div className="flex gap-3">
          {[
            { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686 2.688v3.079h3.045v-3.47h3.047V23.49c0-5.99-4.388-10.954-10.125-11.417z" },
            { name: "TikTok", icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.56a8.16 8.16 0 004.77 1.52V6.72a4.85 4.85 0 01-1-.03z" },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-red-600 transition-colors"
 >
              <span className="sr-only">{social.name}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
