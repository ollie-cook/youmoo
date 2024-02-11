import { type Post } from "@/app/utils/types"
import { myFont } from "@/app/fonts/fonts";

export default function Post({ post }: { post: Post }) {

  let mooString = "m" + "o".repeat(post.moo_count);
  if (post.include_exclamation) {
    mooString += "!"
  }

  let timeAgo = "not sure how long ago";
  if (post.created_at != undefined) {
    timeAgo = calculateTime(post.created_at)
  }

  return (
    <div className="w-full mb-2 p-2 bg-amber-300 rounded-lg border-2 border-amber-200">
      <p className="text-wrap" >{post.name || "Anonymous"}&nbsp;&nbsp;<span className="text-xs">{timeAgo}</span></p>
      <p className={`text-xl ${myFont.className}`} style={{overflowWrap: "break-word"}}>{mooString}</p>
    </div>
  )
}

const calculateTime = (date: string) => {
  let now = new Date();
  let created_At = new Date(date);
  let differenceInMilliseconds = now.getTime() - created_At.getTime();

  // If you want the difference in seconds
  let differenceInSeconds = differenceInMilliseconds / 1000;

  // If you want the difference in minutes
  let differenceInMinutes = differenceInSeconds / 60;

  // If you want the difference in hours
  let differenceInHours = differenceInMinutes / 60;

  // If you want the difference in days
  let differenceInDays = differenceInHours / 24;

  if (differenceInMinutes < 60) {
    return `${Math.floor(differenceInMinutes)} minutes ago`
  } else if (differenceInHours < 24) {
    return `${Math.floor(differenceInHours)} hours ago`
  } else {
    return `${Math.floor(differenceInDays)} days ago`
  }
}