export const SUPABASE_URL = 'https://ztgjmyjrtrlyrgntvtny.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_GGh8txjx_3OFYwmTGdccjQ_zkxRYqep';

export const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;