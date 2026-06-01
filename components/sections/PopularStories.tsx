"use client";

import Link from "next/link";
import { Article } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { FadeIn } from "@/components/motion/FadeIn";

interface PopularStoriesProps {
  articles: Article[];
}

export function PopularStories({ articles }: PopularStoriesProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Main Content */}
          <FadeIn>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-playfair text-3xl md:text-4xl">Popular Stories</h2>
                <div className="h-px flex-1 bg-gray-800" />
              </div>
              <div className="space-y-8">
                {articles.slice(0, 3).map((article) => (
                  <ArticleCard key={article.id} article={article} variant="horizontal" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={0.2}>
            <div className="lg:pl-8 lg:border-l lg:border-gray-800">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-playfair text-2xl">Trending Now</h3>
                <div className="h-px flex-1 bg-gray-800" />
              </div>
              <div className="space-y-6">
                {articles.slice(3, 5).map((article, i) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="group flex gap-4"
                  >
                    <span className="font-playfair text-4xl text-gray-800 group-hover:text-accent transition-colors duration-300">
                      0{i + 4}
                    </span>
                    <div>
                      <span className="text-xs font-inter uppercase tracking-widest text-accent mb-1 block">
                        {article.category}
                      </span>
                      <h4 className="font-playfair text-lg leading-tight group-hover:text-gray-300 transition-colors">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Newsletter Box */}
              <div className="mt-12 p-8 bg-gray-900 border border-gray-800">
                <h4 className="font-playfair text-xl mb-2">Stay Connected</h4>
                <p className="text-sm text-gray-400 mb-4">
                  Get the latest stories delivered to your inbox every week.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-white text-black text-sm font-inter uppercase tracking-widest hover:bg-accent transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
