import NavBar from "./components/NavBar"
import SubmitPost from "./components/SubmitPost"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <NavBar />
      <SubmitPost />
    </main>
  );
}
