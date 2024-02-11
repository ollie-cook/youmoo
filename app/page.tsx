import NavBar from "./components/NavBar"
import SubmitPost from "./components/SubmitPost"
import Posts from "./components/Posts"
import { myFont } from "@/app/fonts/fonts";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center z-10">
      <div className={`fixed flex flex-col left-2 top-2 items-center w-fit ${myFont.className}`}>
        <h1 className="text-5xl">YouMoo</h1>
        <h2 className="font-thin">The Social Media for Cows</h2>
      </div>
      <div className="w-1/3">
        <SubmitPost />
        <Posts />
      </div>
    </main>
  );
}
