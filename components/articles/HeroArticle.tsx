"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/lib/data/articles";

interface HeroArticleProps {
  article: Article;
}

export function HeroArticle({ article }: HeroArticleProps) {
  // Use UTC methods to avoid hydration mismatch from timezone differences
  const date = new Date(article.publishedAt);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

  return (
    <section className="relative">
      <Link href={`/news/${article.slug}`} className="group block">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Desktop Image */}
          <div className="hidden md:block relative aspect-[21/9] overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="max-w-xl"
                >
                  <span className="inline-block px-3 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                    {article.category}
                  </span>
                  <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white">
                    {article.title}
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="font-medium text-white">{article.author?.name || 'Unknown'}</span>
                    <span>•</span>
                    <span>{formattedDate}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative aspect-square">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-2">
                {article.category}
              </span>
              <h1 className="font-playfair text-2xl leading-tight mb-2 text-white">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{article.author?.name || 'Unknown'}</span>
                <span>•</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
