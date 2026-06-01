"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const dynamic = 'force-dynamic';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [supabaseConfigured, setSupabaseConfigured] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const supabase = createClient() as any;

      // Check if Supabase is configured
      if (!supabase.auth || !supabase.auth.getUser) {
        setSupabaseConfigured(false);
        setLoading(false);
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        setLoading(false);
      }
    };
    getUser();
  }, [router]);

  const handleSignOut = async () => {
    const supabase = createClient() as any;
    if (supabase.auth?.signOut) {
      await supabase.auth.signOut();
    }
    router.push("/login");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Admin Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="font-playfair font-bold text-xl text-white">
              STYLE<span className="text-red-600">&</span> SOCIETY <span className="text-gray-500 text-sm font-normal">CMS</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/admin" className="text-gray-300 hover:text-white transition-colors text-sm">
                Dashboard
              </Link>
              <Link href="/admin/articles" className="text-gray-300 hover:text-white transition-colors text-sm">
                Articles
              </Link>
              <Link href="/admin/categories" className="text-gray-300 hover:text-white transition-colors text-sm">
                Categories
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
              View Site
            </Link>
            <button
              onClick={handleSignOut}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-[1280px] mx-auto px-4 py-8">
        {!supabaseConfigured && (
          <div className="mb-6 p-4 bg-yellow-600/20 border border-yellow-600 text-yellow-500">
            Supabase is not configured. Please add your Supabase credentials to .env.local to enable full functionality.
          </div>
        )}
        {children}
      </main>
    </div>
  );
}