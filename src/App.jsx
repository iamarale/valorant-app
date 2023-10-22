// https://valorant-api.com/v1/agents
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Kits from "./Pages/Kits";
import Bundles from "./Pages/Bundles";
import Homepage from "./Pages/Homepage";
import Error from "./Pages/Error";


export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const [agents, setAgents] = useState([]);
  const [bundles, setBundles] = useState([]);
  const [weapons, setWeapons] = useState([]); // State variable for weapons
  const [gear, setGear] = useState([]); // State variable for gear

  useEffect(() => {
    async function getAgentData() {
      try {
        setIsLoading(true);

        // Fetch Agents 
        const agentResponse = await fetch(`https://valorant-api.com/v1/agents`);
        const agentData = await agentResponse.json();

        // Fetch bundles 
        const bundlesResponse = await fetch(`https://valorant-api.com/v1/bundles`);
        const bundlesData = await bundlesResponse.json();

        // Fetch weapons 
        const weaponsResponse = await fetch(`https://valorant-api.com/v1/weapons`);
        const weaponsData = await weaponsResponse.json();

        // Fetch gear 
        const gearResponse = await fetch(`https://valorant-api.com/v1/gear`);
        const gearData = await gearResponse.json();

        // if any of the responses 
        if (agentResponse.status !== 200 || bundlesResponse.status !== 200 || weaponsResponse.status !== 200 || gearResponse.status !== 200) {
          throw new Error("Error fetching the data");
        }


        setIsLoading(false);

        // stores the data from the responses in state
        setAgents(agentData.data);
        setBundles(bundlesData.data);
        setWeapons(weaponsData.data);
        setGear(gearData.data);
      } catch (err) {
        console.error(err);
      }
    }

    getAgentData();
  }, [selectedId]);

  // ... Rest of your code


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage isLoading={isLoading} agents={agents} setSelectedId={setSelectedId} selectedId={selectedId} />}>Agent</Route >
        <Route path="bundles" element={<Bundles bundles={bundles} />}>Bundles</Route>
        <Route path="kits" element={<Kits />}>Kits</Route>
        <Route path="*" element={<Error />}>Kits</Route>
      </Routes>
    </BrowserRouter>
  )
}
