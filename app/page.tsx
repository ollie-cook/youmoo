import NavBar from "./components/NavBar"
import SubmitPost from "./components/SubmitPost"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-1/3">
        <SubmitPost />
        <Posts />
      </div>
    </main>
  );
}
