// https://valorant-api.com/v1/agents
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Kits from "./Pages/Kits";
import Bundles from "./Pages/Bundles";
import Homepage from "./Pages/Homepage";
import Error from "./Pages/Error";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage isLoading={isLoading} agents={agents} setSelectedId={setSelectedId} selectedId={selectedId} />}>Agent</Route >
        <Route path="bundles" element={<Bundles />}>Bundles</Route>
        <Route path="kits" element={<Kits />}>Kits</Route>
        <Route path="*" element={<Error />}>Kits</Route>
      </Routes>
    </BrowserRouter>
  )
}



// <div className={`min-h-full px-2 duration-200 bg-background`}>
//   <Header />
//   <Navigation />

//   {/* displays content based on nav option*/}
//   <MainContent isLoading={isLoading} setSelectedId={setSelectedId} selectedId={selectedId} agents={agents} />
// </div>