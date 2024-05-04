import { SupabaseClient } from "@supabase/supabase-js";

export const db = new SupabaseClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
        auth: {
            persistSession: true
        }
    }
)