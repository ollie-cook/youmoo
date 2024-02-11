import { type Post } from "@/app/utils/types"
import { myFont } from "@/app/fonts/fonts";

export default function Post({ post }: { post: Post }) {

  let mooString = "m" + "o".repeat(post.moo_count);
  if (post.include_exclamation) {
    mooString += "!"
  }

  return (
    <div className="w-full mb-2 p-2 bg-amber-300 rounded-lg border-2 border-amber-200">
      <p className="text-wrap" >{post.name || "Anonymous"}&nbsp;&nbsp;<span className="text-xs">2h ago</span></p>
      <p className={`text-xl ${myFont.className}`} style={{overflowWrap: "break-word"}}>{mooString}</p>
    </div>
  )
}