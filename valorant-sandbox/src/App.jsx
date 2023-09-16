// https://valorant-api.com/v1/agents

import { useEffect } from "react"
import { useState } from "react"



export default function App() {

  // state
  const [valData, setValData] = useState([])

  // useEffects
  useEffect(() => {
    async function getValorantData() {
      try {
        const res = await fetch(`https://valorant-api.com/v1/agents`);
        if (!res.ok) throw new Error("OMG BRO THE FETCH REQUEST IS NOT 200 BRO WTF ITS NOT WORKING BRO WHAT HAPPENED BRO?!??! B RO FIX THIS ASAP NOW!")
        const data = res.json();
        setValData(data)
      } catch (err) {
        console.error(err.MESSAGE)
      }
    }
  }, [])

  // funcs


  return (
    <>
      <header>

      </header>
    </>
  )
}