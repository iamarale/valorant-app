import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Agents from "./Pages/Agents";
import Bundles from "./Pages/Bundles";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
  const [agents, setAgents] = useState([])
  const [bundles, setBundles] = useState([])
  const [shields, setShields] = useState([])
  const [weapons, setWeapons] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        // gets data from api
        setIsLoading(true)
        const agentsResponse = await fetch("https://valorant-api.com/v1/agents")
        const bundlesResponse = await fetch("https://valorant-api.com/v1/bundles")
        const shieldsResponse = await fetch("https://valorant-api.com/v1/gear")
        const weaponsResponse = await fetch("https://valorant-api.com/v1/weapons")
        if (!agentsResponse.ok || !bundlesResponse.ok || !shieldsResponse.ok || !weaponsResponse.ok) throw new Error("Failed to fetch data from API");

        const agentData = await agentsResponse.json();
        const bundlesData = await bundlesResponse.json();
        const shieldsData = await shieldsResponse.json();
        const weaponsData = await weaponsResponse.json();

        setIsLoading(false)
        // sets the states to the data
        setAgents(agentData.data)
        setBundles(bundlesData.data)
        setShields(shieldsData.data)
        setWeapons(weaponsData.data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="agents" element={<Agents isLoading={isLoading} allAgents={agents} />} />
      <Route path="bundles" element={<Bundles bundles={bundles} />} />
      <Route path="kits" element={<Bundles weapons={weapons} shields={shields} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

