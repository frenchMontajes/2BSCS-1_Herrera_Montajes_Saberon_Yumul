import { SupabaseClient } from "@supabase/supabase-js";

export const db = new SupabaseClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY,
    {
        auth: {
            persistSession: true
        }
    }
)