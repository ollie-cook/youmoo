import NavBar from "./components/NavBar"
import SubmitPost from "./components/SubmitPost"
import Posts from "./components/Posts"
import { myFont } from "@/app/fonts/fonts";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center z-10">
      <div className={`mt-2 lg:fixed flex flex-col left-2 items-center w-fit ${myFont.className}`}>
        <h1 className="text-5xl">YouMoo</h1>
        <h2 className="font-thin">The #1 Social Media for Cows</h2>
      </div>
      <div className="w-11/12 mb-16 sm:w-2/3 lg:w-1/2 lg:mb-0 2xl:w-1/3">
        <SubmitPost />
        <Posts />
      </div>
      <p className="absolute bottom-2 right-2 text-white" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
    </main>
  );
}
