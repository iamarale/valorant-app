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

    const btnStyles = `border-primary border-2 rounded px-1 py-0.5 duration-200 hover:bg-opacity-60 hover:bg-primary`
    // JSX
    return (
        <div className="mt-16 h-full">
            {/* Gets ID agent */}
            {/* gets all Agents */}
            {isLoading && <h1 className="text-4xl font-bold">Loading....</h1>}
            {selectedAgent
                ?
                <div className="border-[1px] h-full border-primary p-2 rounded">
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
                        <div key={agent.uuid} className={`border-[1px] border-primary p-2 my-6 rounded`}>
                            <header className="flex items-center">
                                <img className="max-h-14 rounded-full" src={agent.displayIcon} alt="" />
                                <h1 className="text-2xl font-bold ml-2">{agent.displayName}</h1>
                            </header>

                            <div className="flex items-center my-2">
                                <img className="max-h-6 mr-2" src={agent.role.displayIcon} alt={`Picture of ${agent.displayName}'s role ${agent.role.displayName}`} />
                                <small className="bg-primary max-w-fit px-2 rounded-xl mt-2">{agent.role.displayName}</small>
                            </div>
                            <p className="mb-6">{agent.description}</p>


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
