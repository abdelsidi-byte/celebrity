"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface ArticleFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category_id: string;
  image: string;
  video_url: string;
  tags: string;
  read_time: number;
  featured: boolean;
  popular: boolean;
  status: "draft" | "published";
  meta_title: string;
  meta_description: string;
  og_image: string;
  published_at: string;
}

export function ArticleEditor({ initialData, isEdit }: { initialData?: any; isEdit?: boolean }) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ArticleFormData>({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category_id: initialData?.category_id || "",
    image: initialData?.image || "",
    video_url: initialData?.video_url || "",
    tags: initialData?.tags?.join(", ") || "",
    read_time: initialData?.read_time || 5,
    featured: initialData?.featured || false,
    popular: initialData?.popular || false,
    status: initialData?.status || "draft",
    meta_title: initialData?.meta_title || "",
    meta_description: initialData?.meta_description || "",
    og_image: initialData?.og_image || "",
    published_at: initialData?.published_at?.split("T")[0] || "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("categories").select("*").order("name");
      setCategories(data || []);
    };
    fetchCategories();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setFormData((prev) => ({ ...prev, slug }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formDataUpload,
    });

    const { url } = await res.json();
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const articleData = {
      ...formData,
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
    };

    const res = isEdit
      ? await fetch(`/api/articles/${initialData.slug}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(articleData),
        })
      : await fetch("/api/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(articleData),
        });

    if (res.ok) {
      router.push("/admin/articles");
      router.refresh();
    } else {
      const { error } = await res.json();
      alert(error || "Failed to save article");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={!isEdit ? generateSlug : undefined}
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600 resize-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Content (Markdown)</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={15}
              className="w-full px-4 py-3 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600 font-mono text-sm resize-none"
              placeholder="## Heading&#10;&#10;Paragraph text..."
              required
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 p-4 space-y-4">
            <h3 className="text-white font-bold">Publishing</h3>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Publish Date</label>
              <input
                type="date"
                name="published_at"
                value={formData.published_at}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 accent-red-600"
                />
                Featured
              </label>
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  name="popular"
                  checked={formData.popular}
                  onChange={handleChange}
                  className="w-4 h-4 accent-red-600"
                />
                Popular
              </label>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-4 space-y-4">
            <h3 className="text-white font-bold">Category</h3>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              required
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-4 space-y-4">
            <h3 className="text-white font-bold">Media</h3>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Image URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
                placeholder="https://..."
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 text-sm text-gray-400"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Video URL (optional)</label>
              <input
                type="text"
                name="video_url"
                value={formData.video_url}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
                placeholder="https://youtube.com/..."
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Read Time (minutes)</label>
              <input
                type="number"
                name="read_time"
                value={formData.read_time}
                onChange={handleChange}
                min="1"
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              />
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 p-4 space-y-4">
            <h3 className="text-white font-bold">SEO</h3>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Meta Title</label>
              <input
                type="text"
                name="meta_title"
                value={formData.meta_title}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Meta Description</label>
              <textarea
                name="meta_description"
                value={formData.meta_description}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
                placeholder="tag1, tag2, tag3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Saving..." : isEdit ? "Update Article" : "Create Article"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-3 bg-gray-800 text-white font-bold uppercase tracking-wider hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}