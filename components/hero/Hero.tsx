"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Article } from "@/lib/data/articles";
import { TextReveal } from "@/components/motion/TextReveal";

interface HeroProps {
  article: Article;
}

export function Hero({ article }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-end"
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 pb-20 md:pb-32">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block text-xs font-inter uppercase tracking-widest text-accent mb-6"
            >
              {article.category}
            </motion.span>

            <TextReveal
              delay={0.3}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-6"
            >
              {article.title}
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl"
            >
              {article.excerpt}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/news/${article.slug}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-inter text-sm uppercase tracking-widest hover:bg-accent transition-colors duration-300"
              >
                Read Story
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{article.author?.name || 'Unknown'}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{article.readTime} min read</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-inter uppercase tracking-widest text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
