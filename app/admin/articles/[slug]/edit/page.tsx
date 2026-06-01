import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { ArticleEditor } from "@/components/admin/ArticleEditor";

export const dynamic = 'force-dynamic';

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: article } = await supabase
    .from("articles")
    .select("*, category:categories(id)")
    .eq("slug", slug)
    .single();

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1 className="font-playfair text-2xl font-bold text-white mb-6">Edit Article</h1>
      <ArticleEditor initialData={article} isEdit />
    </div>
  );
}