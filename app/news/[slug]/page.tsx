import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(id, email, name, avatar, role),
      category:categories(id, name, slug, description, image)
    `)
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (!article) {
    notFound();
  }

  // Get related articles
  const { data: relatedArticles } = await supabase
    .from("articles")
    .select(`
      *,
      author:authors(id, name, avatar, role),
      category:categories(id, name, slug)
    `)
    .eq("status", "published")
    .neq("id", article.id)
    .eq("category_id", article.category_id)
    .limit(3);

  // Use UTC methods to avoid hydration mismatch from timezone differences
  const date = article.published_at ? new Date(article.published_at) : null;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formattedDate = date ? `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}` : '';

  // Simple markdown-to-HTML conversion
  const contentHtml = (article.content || '')
    .replace(/^## (.+)$/gm, '<h2 class="font-playfair text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-playfair text-xl font-bold text-white mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/^(?!<[h|p|u|o|l])-(.+)$/gm, '<li class="ml-4 mb-2 text-gray-300">$1</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed mb-4">')
    .replace(/^(?!<[h|l])(.+)(?<!>)$/gm, '<p class="text-gray-300 leading-relaxed mb-4">$1</p>');

  return (
    <article className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Article Header */}
      <div className="max-w-[800px] mx-auto px-4 -mt-32 relative z-10">
        <Link
          href={`/category/${article.category?.slug}`}
          className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4"
        >
          {article.category?.name}
        </Link>

        <h1 className="font-playfair text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-gray-300 text-lg mb-6">{article.excerpt}</p>

        <div className="flex items-center gap-4 mb-8">
          {article.author?.avatar && (
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            <div className="text-white font-medium">{article.author?.name}</div>
            <div className="text-gray-500 text-sm">
              {formattedDate} · {article.read_time} min read
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[800px] mx-auto px-4 py-8">
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-800">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-400 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Video */}
        {article.video_url && (
          <div className="mt-8">
            <iframe
              src={article.video_url.replace("watch?v=", "embed/")}
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4 py-12 border-t border-gray-800">
          <h2 className="font-playfair text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-red-600" />
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((related: any) => (
              <Link
                key={related.id}
                href={`/news/${related.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/2] overflow-hidden mb-3">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  {related.category?.name}
                </span>
                <h3 className="font-playfair text-lg leading-tight mt-1 group-hover:text-gray-300 transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}