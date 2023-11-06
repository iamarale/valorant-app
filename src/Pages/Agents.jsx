import { useState } from "react";
import AgentDetail from "../components/agent/AgentDetail";
import DisplayAllAgents from "../components/agent/DisplayAllAgents";
import Header from "../components/header/Header"
export default function Agents({ allAgents, isLoading }) {
    document.title = "Agents"
    const [selectedAgent, setSelectedAgent] = useState("");
    // Displays if data isn't loaded yet
    if (isLoading) {
        return <div className="bg-valorant-red h-full">
            <Header />
            <h1 className="text-center text-3xl font-bold">Loading data</h1>
        </div>
    }

    // Displaying of the agents
    return <div className="bg-beige text-dark-gray h-full">
        <Header />
        <main className="justify-items-center my-4 px-2">
            {/* {allAgents ? <div>YURR</div> : <h1>There was a problem fetching data</h1>} */}
            {selectedAgent ? <AgentDetail selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} /> : <DisplayAllAgents selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} allAgents={allAgents} />}
        </main>
    </div>
}

