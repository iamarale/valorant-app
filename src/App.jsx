// https://valorant-api.com/v1/agents
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import MainContent from "./Components/MainContent";

export default function App() {
  // state
  const [isLoading, setIsLoading] = useState(false)
  const [agents, setAgents] = useState([])
  const [selectedId, setSelectedId] = useState('')

  // useEffects
  useEffect(() => {
    async function getAgentData() {
      try {
        // set
        setIsLoading(true)
        const res = await fetch(`https://valorant-api.com/v1/agents`);
        const data = await res.json();
        setIsLoading(false)

        // puts all data into agents
        setAgents(data.data)
      } catch (err) {
        console.error(err)
      }
    }

    getAgentData()
  }, [selectedId]);



  return (
    <div className={`max-h-max px-2 duration-200 `}>
      <Header />
      <Navigation />

      {/* displays content based on nav option*/}
      <MainContent isLoading={isLoading} setSelectedId={setSelectedId} selectedId={selectedId} agents={agents} />
    </div>
  )
}



