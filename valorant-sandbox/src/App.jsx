// https://valorant-api.com/v1/agents
import { useEffect, useState } from "react";

export default function App() {
  // state
  const [query, setQuery] = useState('agents')
  const [valData, setValData] = useState([]);

  // useEffects
  useEffect(() => {
    async function getValorantData() {
      try {
        const res = await fetch(`https://valorant-api.com/v1/${query}`);
        if (!res.ok) throw new Error("There was an error fetching the dagrGRGARGARGta");
        const data = await res.json();
        console.log(data)
        setValData(data)
      } catch (err) {
        console.error(err)
      }
    }
    getValorantData()
  }, [query]);

  // funcs

  return (
    <div className="bg-primary-blue h-full">
      <header className="">
        <h1>Valorant Info</h1>
      </header>
    </div>
  )
}

function CurrentQuery() {

  return <>

  </>
}