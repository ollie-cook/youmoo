import { createClient } from "@/app/utils/supabase/server"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  let { data: posts, error } = await supabase
    .from('posts')
    .select('*')

  return Response.json(posts)
}

export async function POST(request: Request) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const body = await request.json()

  const { data, error } = await supabase
    .from('posts')
    .insert([{ name: body.name, moo_count: body.mooCount }])

  return Response.json(data)
}