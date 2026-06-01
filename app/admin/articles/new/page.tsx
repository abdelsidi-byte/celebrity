import { ArticleEditor } from "@/components/admin/ArticleEditor";

export const dynamic = 'force-dynamic';

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="font-playfair text-2xl font-bold text-white mb-6">New Article</h1>
      <ArticleEditor />
    </div>
  );
}