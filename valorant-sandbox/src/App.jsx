// https://valorant-api.com/v1/agents
import { useEffect, useState } from "react";
import Agents from "./Components/Agents"
import Header from "./Components/Header";

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
        setValData(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    getValorantData()
  }, [query]);

  // funcs

  return (
    <div className="max-h-max">
      <Header />

      <main className="grid items-center justify-center  gap-4 container mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {/* Agents */}
        <Agents agentData={valData} />
      </main>
    </div>
  )
}



