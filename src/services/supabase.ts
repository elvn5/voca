import { createClient } from '@supabase/supabase-js'

console.log(process.env)

export const supabase = createClient('https://cbbkfgpugzwdnozqzigv.supabase.co', process.env["NEXT_PUBLIC_SUPABASE_KEY"] as string)