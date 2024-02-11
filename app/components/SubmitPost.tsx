'use client'

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"

export default function SubmitPost() {
  const [name, setName] = useState("")
  const [mooCount, setMooCount] = useState(1)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
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
        <label htmlFor="moo-count">How many 'moo's would you like to send?</label>
        <div id="moo-count" className="w-1/2">
          <div className="flex w-full justify-between">
            <p>1</p>
            <p>100</p>
          </div>
          <Slider 
            defaultValue={[1]} 
            max={100} 
            min={1} 
            step={1} 
            onValueChange={(newValue) => setMooCount(newValue[0])} 
            className="my-1"
          />
          <p>{mooCount} 'moo's selected</p>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Send {mooCount} 'moo's</button>
      </form>
    </div>
  )
}