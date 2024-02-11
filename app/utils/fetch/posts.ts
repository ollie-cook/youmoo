import { createClient } from "@/app/utils/supabase/server"
import { cookies } from "next/headers"

export async function getPosts() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  let { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  return posts
}