"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({ name: "", slug: "", description: "", image: "" });
  const [saving, setSaving] = useState(false);

  const fetchCategories = async () => {
    const supabase = createClient();
    const { data } = await supabase.from("categories").select("*").order("name");
    setCategories(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateSlug = () => {
    const slug = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    setFormData((prev) => ({ ...prev, slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const supabase = createClient();

    if (editingCategory) {
      await supabase.from("categories").update(formData).eq("id", editingCategory.id);
    } else {
      await supabase.from("categories").insert(formData);
    }

    setFormData({ name: "", slug: "", description: "", image: "" });
    setEditingCategory(null);
    setSaving(false);
    fetchCategories();
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, slug: category.slug, description: category.description, image: category.image });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this category?")) return;
    const supabase = createClient();
    await supabase.from("categories").delete().eq("id", id);
    fetchCategories();
  };

  const handleCancel = () => {
    setEditingCategory(null);
    setFormData({ name: "", slug: "", description: "", image: "" });
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div>
      <h1 className="font-playfair text-2xl font-bold text-white mb-6">Categories</h1>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 border border-gray-800 p-6 mb-8"
      >
        <h2 className="text-white font-bold mb-4">{editingCategory ? "Edit Category" : "New Category"}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={!editingCategory ? generateSlug : undefined}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              required
            />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1">Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600 resize-none"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-sm mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white focus:outline-none focus:border-red-600"
            />
          </div>
          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : editingCategory ? "Update" : "Create"}
            </button>
            {editingCategory && (
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-800 text-white font-bold uppercase tracking-wider hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </motion.div>

      {/* List */}
      <div className="bg-gray-900/50 border border-gray-800 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left text-gray-400 text-sm font-medium p-4">Name</th>
              <th className="text-left text-gray-400 text-sm font-medium p-4">Slug</th>
              <th className="text-right text-gray-400 text-sm font-medium p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-b border-gray-800 last:border-0">
                <td className="p-4 text-white font-medium">{cat.name}</td>
                <td className="p-4 text-gray-400 text-sm">{cat.slug}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="text-gray-400 hover:text-white transition-colors text-sm mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {categories.length === 0 && (
          <div className="p-8 text-center text-gray-500">No categories yet.</div>
        )}
      </div>
    </div>
  );
}