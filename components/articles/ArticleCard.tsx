"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/lib/data/articles";
import { cn } from "@/lib/utils/cn";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "horizontal" | "compact";
  className?: string;
  priority?: boolean;
}

export function ArticleCard({
  article,
  variant = "default",
  className,
  priority = false,
}: ArticleCardProps) {
  // Use UTC methods to avoid hydration mismatch from timezone differences
  const date = new Date(article.publishedAt);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${months[date.getUTCMonth()]} ${date.getUTCDate()}`;

  if (variant === "featured") {
    return (
      <Link href={`/news/${article.slug}`} className={cn("group block", className)}>
        <motion.article
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              priority={priority}
            />
            <div className="absolute inset-0 gradient-overlay-strong" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                {article.category}
              </span>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl leading-tight mb-2 text-white">
                {article.title}
              </h2>
              <p className="text-gray-300 text-sm line-clamp-2 mb-3 hidden md:block">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>{article.author?.name || 'Unknown'}</span>
                <span>•</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link href={`/news/${article.slug}`} className={cn("group block", className)}>
        <motion.article
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="flex gap-4"
        >
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="96px"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
              {article.category}
            </span>
            <h3 className="font-playfair text-base leading-snug line-clamp-2 group-hover:text-gray-300 transition-colors">
              {article.title}
            </h3>
            <span className="text-xs text-gray-500 mt-1">{formattedDate}</span>
          </div>
        </motion.article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/news/${article.slug}`} className={cn("group block", className)}>
        <motion.article
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.2 }}
          className="flex items-start gap-3 py-4 border-b border-gray-800 last:border-0"
        >
          <span className="font-playfair text-2xl text-gray-700 group-hover:text-red-600 transition-colors flex-shrink-0">
            {String(article.id).padStart(2, "0")}
          </span>
          <div>
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              {article.category}
            </span>
            <h3 className="font-playfair text-sm leading-snug group-hover:text-gray-300 transition-colors mt-1">
              {article.title}
            </h3>
          </div>
        </motion.article>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`} className={cn("group block", className)}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[3/2] overflow-hidden mb-3">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
          </div>
        </div>
        <h3 className="font-playfair text-lg md:text-xl leading-tight mb-2 group-hover:text-gray-300 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-2 hidden md:block">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{article.author?.name || 'Unknown'}</span>
          <span>•</span>
          <span>{formattedDate}</span>
        </div>
      </motion.article>
    </Link>
  );
}
