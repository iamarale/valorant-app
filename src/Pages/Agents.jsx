import { useState } from "react";
import AgentDetail from "../components/agent/AgentDetail";
import DisplayAllAgents from "../components/agent/DisplayAllAgents";
import Header from "../components/header/Header"

export default function Agents({ allAgents, isLoading }) {
    const [isAgentSelected, setIsAgentSelected] = useState(false);
    const [selectedAgentId, setSelectedAgentId] = useState("");

    // Displays if data isn't loaded yet
    if (isLoading) {
        return <div className="bg-valorant-red h-full">
            <Header />
            <h1 className="text-center text-3xl font-bold">Loading data</h1>
        </div>
    }

    console.log(selectedAgentId)
    // Displaying of the agents
    return <div className="bg-beige text-dark-gray h-full">
        <Header />
        <main className="grid gap-2 my-4 px-2 md:grid-cols-2 lg:grid-cols-3">
            {/* {allAgents ? <div>YURR</div> : <h1>There was a problem fetching data</h1>} */}
            {isAgentSelected ? <AgentDetail allAgents={allAgents} /> : <DisplayAllAgents setIsAgentSelected={setIsAgentSelected} selectedAgentId={selectedAgentId} setSelectedAgentId={setSelectedAgentId} allAgents={allAgents} />}
        </main>
    </div>
}

