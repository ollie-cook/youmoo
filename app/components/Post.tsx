import { type Post } from "@/app/utils/types"

export default function Post({ post }: { post: Post }) {

  const mooString = "m" + "o".repeat(post.moo_count) + "!"

  return (
    <div className="w-full mb-2 p-2 bg-amber-300">
      <p>{post.name || "Anonymous"}&nbsp;&nbsp;<span className="text-xs">2h ago</span></p>
      <p>{mooString}</p>
    </div>
  )
}