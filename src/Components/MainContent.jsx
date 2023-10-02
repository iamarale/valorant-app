import Button from "./Button"
export default function MainContent({ selectedId, setSelectedId, agents, isLoading }) {


    // sets agentuid in selectedId
    function handleSelectedId(agentuid) {
        setSelectedId(agentuid)
    }

    // Function to get the selected agent
    const getSelectedAgent = () => {
        if (!selectedId || !agents) return null;

        // Find the agent with the matching uuid
        return agents.find(agent => agent.uuid === selectedId);
    }



    const isLoadingContent = isLoading && <h1 className="text-4xl font-bold">Loading....</h1>;

    // Get the selected agent object
    const selectedAgent = getSelectedAgent();

    // Button styles
    const buttonStyles = `border-primary border-2 rounded px-1 py-0.5 duration-200 hover:bg-opacity-60 hover:bg-primary`;


    // JSX
    return (
        <section className="mt-16 h-full">
            {/* Gets ID agent */}
            {/* gets all Agents */}
            {isLoadingContent}

            {selectedAgent
                ?
                // Displays more complex information about the agent
                // DISPLAY: abilities, roles, colors, full portrait, developer name, ?.tags, 
                <div className="border-[1px] h-full border-primary p-2 rounded grid sm:grid-cols-2">

                    <div className="mb-2 col-span-1">
                        <h1 className="text-2xl text-primary">{selectedAgent.displayName}</h1>
                        <p>{selectedAgent.description}</p>
                    </div>


                    <button className={`${buttonStyles} max-w-max`} onClick={() => setSelectedId("")}>All Agents</button>
                </div>
                :

                // maps through agents and display basic info. of each agent at a glance
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

                            <Button onClick={() => handleSelectedId(agent.uuid)}>View More</Button>
                        </div>
                    );
                })}
        </section>
    );
}
