import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCategoryBySlug, getArticlesByCategory, categories } from "@/lib/data/articles";
import { ArticleCard } from "@/components/articles/ArticleCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} News | Style & Society`,
    description: category.description,
    openGraph: {
      title: `${category.name} News | Style & Society`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(slug);

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section className="bg-gray-900/50 border-b border-gray-800 py-12">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <span className="inline-block px-3 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
            Section
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-[1280px] mx-auto px-4 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article, i) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="default"
                priority={i < 3}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No articles found in this category yet.
            </p>
            <a
              href="/"
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              Return to homepage
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
