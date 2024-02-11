import { getPosts } from "@/app/utils/fetch/posts"
import Post from "./Post"

export default async function Posts() {
  const posts = await getPosts()

  return (
    <div className="mt-4">
      <h1>Recent Posts</h1>
      {
        posts?.map(post => {
          const guid = crypto.randomUUID()
          return (
          <Post post={post} key={guid}/>
        )})
      }
    </div>
  )
}