import { createClient } from "@/lib/supabase/server";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Sidebar } from "@/components/sections/Sidebar";
import { articles as staticArticles, latestArticles, popularArticles } from "@/lib/data/articles";

export const dynamic = 'force-dynamic';

async function getArticles() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("articles")
      .select(`
        *,
        category:categories(id, name, slug, description, image)
      `)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(16);

    if (data && data.length > 0) {
      const mapped = data.map((a: any) => ({
        id: a.id,
        slug: a.slug,
        title: a.title,
        excerpt: a.excerpt,
        content: a.content,
        author: a.author || { name: 'Staff Writer', avatar: '', role: '' },
        category: a.category?.name || "Uncategorized",
        tags: a.tags || [],
        image: a.image,
        publishedAt: a.published_at,
        readTime: a.read_time || 5,
        featured: a.featured || false,
        popular: a.popular || false,
        videoUrl: a.video_url,
      }));
      // Combine DB articles with static articles to ensure full homepage
      const combined = [...mapped, ...staticArticles].filter((article, index, self) =>
        index === self.findIndex((a) => a.id === article.id)
      );
      return {
        articles: combined,
        featured: mapped.find((a: any) => a.featured) || combined[0],
        popular: mapped.filter((a: any) => a.popular).slice(0, 5).length > 0
          ? mapped.filter((a: any) => a.popular).slice(0, 5)
          : popularArticles,
        latest: mapped.slice(0, 4).length >= 2
          ? mapped.slice(0, 4)
          : latestArticles,
      };
    }
  } catch (e) {
    // Fallback to static data
  }

  // Fallback to static data
  return {
    articles: staticArticles,
    featured: staticArticles.find((a) => a.featured) || staticArticles[0],
    popular: popularArticles || [],
    latest: latestArticles || staticArticles.slice(0, 4),
  };
}

export default async function HomePage() {
  const { articles, featured, popular, latest } = await getArticles();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Magazine Style */}
      <section className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero - 8 columns */}
          <div className="lg:col-span-8">
            <a href={`/news/${featured.slug}`} className="block relative h-[500px] lg:h-[600px] overflow-hidden group cursor-pointer">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                  {featured.category}
                </span>
                <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  {featured.title}
                </h1>
                <p className="text-gray-200 text-lg mb-4 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span>{featured.author?.name || 'Unknown'}</span>
                  <span>•</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </a>
          </div>

          {/* Top Stories Sidebar - 4 columns */}
          <div className="lg:col-span-4">
            <div className="bg-gray-900/50 border border-gray-800 p-5">
              <h2 className="font-playfair text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-red-600" />
                Top Stories
              </h2>
              <div className="space-y-4">
                {(popular.slice(0, 4) || articles.slice(1, 5)).map((article: any, i: number) => (
                  <a
                    key={`popular-${i}-${article.id}`}
                    href={`/news/${article.slug}`}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-red-500 font-semibold uppercase">
                        {article.category}
                      </span>
                      <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-red-400 transition-colors">
                        {article.title}
                      </h3>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {article.publishedAt || article.published_at}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-[1280px] mx-auto px-4 py-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {["Celebrity", "Royals", "Fashion", "Movies", "Music", "TV"].map((cat) => (
            <a
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="px-4 py-2 bg-gray-800 hover:bg-red-600 text-white text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1280px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 */}
          <div className="lg:col-span-2">
            {/* Latest News */}
            <section className="mb-8">
              <h2 className="font-playfair text-2xl mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-red-600" />
                Latest News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(latest.slice(0, 4) || articles.slice(5, 9)).map((article: any, i: number) => (
                  <ArticleCard
                    key={`latest-${i}-${article.id}`}
                    article={article}
                    variant="default"
                    priority={i < 2}
                  />
                ))}
              </div>
            </section>

            {/* Entertainment Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-playfair text-2xl flex items-center gap-3">
                  <span className="w-1 h-7 bg-red-600" />
                  Entertainment
                </h2>
                <a
                  href="/news"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  See All
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {articles.slice(9, 12).map((article: any, i: number) => (
                  <ArticleCard
                    key={`entertainment-${i}-${article.id}`}
                    article={article}
                    variant="default"
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 1/3 */}
          <div className="lg:col-span-1">
            <Sidebar
              trendingArticles={popular.slice(0, 5) || popularArticles}
              latestArticles={latest.slice(0, 5) || latestArticles}
            />
          </div>
        </div>
      </div>

      {/* Newsletter Banner */}
      <section className="bg-gray-900/50 border-y border-gray-800 py-8 mt-8">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-playfair text-xl mb-1">Never miss a story</h3>
              <p className="text-gray-400 text-sm">Get Style & Society newsletter delivered to your inbox daily.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-4 py-3 bg-black border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Must-Read Section */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="font-playfair text-2xl mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-red-600" />
            Must-Read
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {articles.slice(12, 16).map((article: any, i: number) => (
              <ArticleCard
                key={`mustread-${i}-${article.id}`}
                article={article}
                variant="default"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}