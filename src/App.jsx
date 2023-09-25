// https://valorant-api.com/v1/agents
import { useEffect, useState } from "react";
import Agents from "./Components/Agents"
import Header from "./Components/Header";
import { Navigation } from "./Components/Navigation";

export default function App() {
  // state
  const [query, setQuery] = useState('agents');
  const [isLoading, setIsLoading] = useState(false)
  const [valData, setValData] = useState([]);
  const [isDark, setIsDark] = useState(false)


  // useEffects
  useEffect(() => {
    async function getValorantData() {
      try {
        setIsLoading(true)
        const res = await fetch(`https://valorant-api.com/v1/${query}`);
        if (!res.ok) throw new Error("There was an error fetching the dagrGRGARGARGta");
        const data = await res.json();
        setIsLoading(false)
        // valData holds api data
        setValData(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    // runs init render and everytime query gets updated
    getValorantData()
  }, [query]);


  return (
    <div className={`max-h-max px-2 duration-200 ${!isDark ? "bg-lm-background text-lm-text " : "bg-dm-background text-dm-text"}`}>
      <Header isDark={isDark} toggleIsDark={setIsDark} />
      <Navigation />
      <main className="grid gap-4 justify-center  container mx-auto sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3">
        {/* Agents */}
        {isLoading ? <h1 className="text-center text-4xl">Loading</h1> : <Agents isDark={isDark} agentData={valData} />}
      </main>
    </div>
  )
}



