export default function MainContent({ selectedId, setSelectedId, agents, isLoading }) {

    // Function to get the selected agent
    const getSelectedAgent = () => {
        if (!selectedId || !agents) return null;

        // Find the agent with the matching uuid
        const selectedAgent = agents.find(agent => agent.uuid === selectedId);
        console.log(selectedAgent)
        return selectedAgent;
    }

    // Get the selected agent object
    const selectedAgent = getSelectedAgent();


    // JSX
    return (
        <div className="my-16">
            {/* Gets ID agent */}
            {/* gets all Agents */}
            {isLoading && <h1 className="text-4xl font-bold">Loading....</h1>}
            {selectedAgent
                ? <div className=" border-2">
                    <div className="container ">
                        <h1>{selectedAgent.displayName}</h1>
                        <p>{selectedAgent.description}</p>
                    </div>
                    <div></div>
                </div>
                : agents.map(agent => {
                    if (agent.isPlayableCharacter) return (
                        <div key={agent.uuid} className="border-[1px] my-6 rounded">
                            <h1>{agent.displayName}</h1>
                            <button onClick={() => {
                                setSelectedId(agent.uuid)
                            }}>Get Id</button>
                        </div>
                    );
                })}

            {/* Display data from the selected agent */}
            { }
        </div>
    );
}
