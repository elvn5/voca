import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://cbbkfgpugzwdnozqzigv.supabase.co', process.env["NEXT_PUBLIC_SUPABASE_KEY"] as string)

export const verifyToken = async () => {
    const session = await supabase.auth.getSession()
    return !!session;

}