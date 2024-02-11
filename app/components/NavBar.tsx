import { myFont } from "@/app/fonts/fonts";

export default function NavBar() {
  return (
    <div className="w-full bg-blue-500">
      <div className={`flex flex-col items-center w-fit ${myFont.className}`}>
        <h1 className="text-5xl">YouMoo</h1>
        <h2 className="font-thin">The Social Media for Cows</h2>
      </div>
    </div>
  )
}