"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/lib/data/articles";
import { FadeIn } from "@/components/motion/FadeIn";

interface FeaturedVideosProps {
  articles: Article[];
}

export function FeaturedVideos({ articles }: FeaturedVideosProps) {
  return (
    <section className="py-20 md:py-32 bg-gray-900/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl">Featured Videos</h2>
            <div className="h-px flex-1 bg-gray-800 mx-8" />
            <span className="text-xs font-inter uppercase tracking-widest text-gray-500">
              Watch& Learn
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.15}>
              <Link href={`/news/${article.slug}`} className="group block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <svg
                          className="w-6 h-6 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-inter uppercase tracking-widest text-accent mb-2 block">
                    {article.category}
                  </span>
                  <h3 className="font-playfair text-lg md:text-xl leading-tight group-hover:text-gray-300 transition-colors">
                    {article.title}
                  </h3>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
