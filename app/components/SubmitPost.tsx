'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"
import { myFont } from "@/app/fonts/fonts";

export default function SubmitPost() {
  const [name, setName] = useState("")
  const [mooCount, setMooCount] = useState(2)
  const [exclamationMark, setExclamationMark] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    console.log(exclamationMark)
    
    const body = { name: name, mooCount: mooCount, exclamationMark: exclamationMark}

    let response;
    try {
      response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify(body),
      })
      .then(res => res.json)
    } finally {
      setLoading(false)
      setSubmitted(true)
      setName("")
      setMooCount(2)
      setExclamationMark(true)
      router.refresh()
    }
  }

  return (
    <div className="w-full mt-4 lg:mt-8 py-2 px-4 rounded-lg bg-[#bed26f] border-2 border-[#ddeba2]">
      {
        submitted == false ? 
        <>
          <p className="text-xl font-semibold">Send a moo</p>
          <form className="flex flex-col items-start m-4" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-black rounded-sm pl-1" />
            <label htmlFor="moo-count" className="mt-4">How many &apos;o&apos;s would you like in your moo?</label>
            <div id="moo-count" className="w-full">
              <div className="flex w-1/2 justify-between mt-1">
                <p className="text-xs">2</p>
                <p className="text-xs">100</p>
              </div>
              <Slider 
                defaultValue={[1]} 
                max={100} 
                min={2} 
                step={1} 
                onValueChange={(newValue) => setMooCount(newValue[0])} 
                className="mt-2 w-1/2"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="exclamation-mark" >Include exclamation mark</label>
              <input type="checkbox" id="exclamation-mark" className="ml-1" checked={exclamationMark} onChange={(e) => setExclamationMark(e.target.checked)} />
            </div>
            <div className="w-full mt-8 " style={{overflowWrap: "break-word"}}>
              <p className=" w-full text-sm" style={{overflowWrap: "break-word"}}>Preview:</p>
              <div className="w-full mb-2 p-2 bg-amber-300 rounded-lg border-2 border-amber-200">
                <p className="text-wrap" >{name || "Anonymous"}&nbsp;&nbsp;<span className="text-xs">1 minute ago</span></p>
                <p className={`text-xl ${myFont.className}`} style={{overflowWrap: "break-word"}}>{"m" + "o".repeat(mooCount) + (exclamationMark == true ? "!" : "")}</p>
              </div>
            </div>
            {
              loading ? 
                <p>Mooing...</p> 
              : 
                <button type="submit" className="bg-[#576719] text-white px-4 py-2 rounded-md mt-4 border-2 border-[#7f922f] hover:bg-[#303b08]">Send moo</button>
            }
          </form>
        </>  
        :
        <div className="flex flex-col justify-center items-center py-4">
          <p>You mooed!</p>
          <button className="p-2 rounded-lg bg-amber-400 mt-2 hover:bg-amber-500" onClick={() => setSubmitted(false)}>
            Moo again?
          </button>
        </div>  
      }
    </div>
  )
}