import AllAgents from "./AllAgents"
import AgentDetail from "./AgentDetail"
export default function MainContent({ selectedId, setSelectedId, agents, isLoading }) {


    // sets agentuid in selectedId
    function handleSelectedId(agentuid) {
        setSelectedId(agentuid)
    }
    const isLoadingContent = isLoading && <h1 className="text-4xl font-bold">Loading....</h1>;

    // Function to get the selected agent
    const getSelectedAgent = () => {
        if (!selectedId || !agents) return null;
        // Find the agent with the matching uuid
        return [agents.find(agent => agent.uuid === selectedId)];
    }


    // Get the selected agent object
    const selectedAgent = getSelectedAgent();

    // JSX
    return (
        <section className="mt-16 min-h-full py-4 grid gap-2 container mx-auto sm:gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {/* Gets ID agent */}
            {/* gets all Agents */}
            {isLoadingContent}

            {selectedAgent
                ?
                // DISPLAY: abilities, roles, colors, full portrait, developer name, ?.tags, 
                <AgentDetail selectedAgent={selectedAgent} setSelectedId={setSelectedId} />
                :
                // Displays: name, description and display icon
                <AllAgents getSelectedAgent={getSelectedAgent} setSelectedId={setSelectedId} agents={agents} />
            }
        </section>
    );
}
