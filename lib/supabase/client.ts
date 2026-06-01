import { createBrowserClient } from "@supabase/ssr";

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

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Return a mock client for when Supabase is not configured
  if (!supabaseUrl || !supabaseKey || supabaseUrl === "your_project_url" || !supabaseUrl.startsWith('http')) {
    return createMockClient() as any;
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}