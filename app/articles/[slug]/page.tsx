import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticleBySlug, articles, latestArticles } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = latestArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 4);

  // Use UTC methods to avoid hydration mismatch from timezone differences
  const date = new Date(article.publishedAt);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;

  return (
    <article className="min-h-screen">
      {/* Hero Image */}
      <div className="relative aspect-[21/9]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Article Header */}
      <div className="max-w-[800px] mx-auto px-4 -mt-32 relative z-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
            {article.category}
          </span>
        </div>
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl leading-tight mb-6">
          {article.title}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          {article.excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 py-6 border-y border-gray-800">
          <div className="relative w-12 h-12">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              fill
              className="object-cover rounded-full"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-medium text-white">{article.author.name}</p>
            <p className="text-sm text-gray-500">{article.author.role}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm text-gray-400">{formattedDate}</p>
            <p className="text-xs text-gray-500">{article.readTime} min read</p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[800px] mx-auto px-4 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          {article.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="font-playfair text-2xl md:text-3xl mt-10 mb-4">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside my-4 space-y-2 text-gray-300">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-800">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium border border-gray-700 text-gray-400 hover:border-red-600 hover:text-red-600 transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center gap-4 mt-8">
          <span className="text-sm text-gray-500">Share:</span>
          {[
            { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686 2.688v3.079h3.045v-3.47h3.047V23.49c0-5.99-4.388-10.954-10.125-11.417z" },
            { name: "Copy", icon: "M161H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z" },
          ].map((social) => (
            <button
              key={social.name}
              className="w-10 h-10 flex items-center justify-center border border-gray-700 hover:border-red-600 hover:text-red-600 transition-colors"
            >
              <span className="sr-only">{social.name}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-gray-900/50 border-t border-gray-800 py-12">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="font-playfair text-2xl mb-8 flex items-center gap-3">
            <span className="w-1 h-7 bg-red-600" />
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="default" />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
