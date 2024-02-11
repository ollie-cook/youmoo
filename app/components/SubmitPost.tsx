'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"

export default function SubmitPost() {
  const [name, setName] = useState("")
  const [mooCount, setMooCount] = useState(2)
  const [loading, setLoading] = useState(false)


  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const body = { name: name, mooCount: mooCount }

    let response;
    try {
      response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify(body),
      })
      .then(res => res.json)
    } finally {
      setLoading(false)
      router.refresh()
    }
  }

  return (
    <div className="w-full mt-8 py-2 px-4 bg-blue-400">
      <p className="text-xl">Send a moo</p>
      <form className="flex flex-col items-start" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="moo-count">How many 'o's would you like in your moo?</label>
        <div id="moo-count" className="w-full">
          <div className="flex w-1/2 justify-between">
            <p>2</p>
            <p>100</p>
          </div>
          <Slider 
            defaultValue={[1]} 
            max={100} 
            min={2} 
            step={1} 
            onValueChange={(newValue) => setMooCount(newValue[0])} 
            className="my-1 w-1/2"
          />
          <div className="w-full mt-3">
            <p className=" w-full" style={{overflowWrap: "break-word"}}>Preview: <br/> {"m" + "o".repeat(mooCount) + "!"}</p>
          </div>
          
        </div>
        {
          loading ? 
            <p>Mooing...</p> 
          : 
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Send {mooCount} 'moo's</button>
        }
      </form>
    </div>
  )
}