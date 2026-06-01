"use client";

import { Article } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { FadeIn } from "@/components/motion/FadeIn";

interface LatestArticlesProps {
  articles: Article[];
}

export function LatestArticles({ articles }: LatestArticlesProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl">Latest Stories</h2>
            <div className="h-px flex-1 bg-gray-800 mx-8" />
            <span className="text-xs font-inter uppercase tracking-widest text-gray-500">
              Fresh perspectives
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.1}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
