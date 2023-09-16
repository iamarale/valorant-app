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
        setValData(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    getValorantData()
  }, [query]);

  // funcs

  return (
    <div className="bg-primary-blue max-h-max">
      <header className="bg-">
        <h1>Valorant Info</h1>
      </header>
      <main className="grid items-center justify-center  gap-4 container mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {/* Agents */}
        <Agent agentData={valData} />
      </main>
    </div>
  )
}

function Agent({ agentData }) {
  console.log(agentData)
  return <>
    {agentData && agentData.map(agent => <div className="border-[1px] border-gray-dark bg-gray-light p-2 rounded text-secondary-blue">
      <img className="max-w-[72px]" src={agent.displayIcon} alt="" />
      <h1 className="text-lg font-bold underline mb-3">{agent.displayName}</h1>
      <div className="max-w-[16rem]">
        <p className="font-light">{agent.description}</p>
      </div>
    </div>)
    }
  </>
}