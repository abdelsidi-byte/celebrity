import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Mock client for when Supabase is not configured
function createMockClient() {
  return {
    from: () => ({
      select: () => ({
        get: async () => ({ data: [], error: null }),
      }),
    }),
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: { user: null }, error: { message: "Not configured" } }),
      signOut: async () => ({ error: null }),
    },
  };
}

export async function createClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Return a mock client for when Supabase is not configured
  if (!supabaseUrl || !supabaseKey || supabaseUrl === "your_project_url" || !supabaseUrl.startsWith('http')) {
    return createMockClient() as any;
  }

  return createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server component - ignore
          }
        },
      },
    }
  );
}