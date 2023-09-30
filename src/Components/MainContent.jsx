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


    const btnStyles = `border-primary border-2 rounded px-1 py-0.5 hover:bg-opacity-60 hover:bg-primary`
    // JSX
    return (
        <div className="mt-16 h-full">
            {/* Gets ID agent */}
            {/* gets all Agents */}
            {isLoading && <h1 className="text-4xl font-bold">Loading....</h1>}
            {selectedAgent
                ?
                <div className="border-[1px] h-full border-primary p-2 rounded h-full">
                    <div className="">
                        <h1>{selectedAgent.displayName}</h1>
                        <p>{selectedAgent.description}</p>
                    </div>
                    <div></div>
                    <button className={`${btnStyles}`} onClick={() => setSelectedId("")}>All Agents</button>
                </div>
                :
                agents.map(agent => {
                    if (agent.isPlayableCharacter) return (
                        <div key={agent.uuid} className="border-[1px] border-primary p-2 my-6 rounded">
                            <h1 className="text-2xl font-bold text-primary">{agent.displayName}</h1>
                            <p>{agent.role.displayName}</p>
                            <img src={agent.displayIcon} alt="" />
                            <p className="mb-4">{agent.description}</p>


                            <button className={`${btnStyles}`} onClick={() => {
                                setSelectedId(agent.uuid)
                            }}>View More</button>
                        </div>
                    );
                })}

            {/* Display data from the selected agent */}
            { }
        </div>
    );
}
