import Button from "../UI/Button"
export default function DisplayAllAgents({ allAgents, setSelectedAgent }) {
    function getSelectedAgent(selectedAgent) {
        setSelectedAgent(selectedAgent)
    }
    return (<div className="container mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-3 ">
        {
            allAgents.map(agent => <div key={agent.uuid} className="border-2 border-dark-gray text-dark-gray rounded p-2">
                <div className="flex items-center justify-between ">
                    <h1 className="text-lg font-semibold md:text-2xl">{agent.displayName}</h1>
                    <img className="h-8 bg-valorant-red rounded-full md:h-12 lg:h-16" src={agent.displayIcon} alt={`A picture of the valorant agent ${agent.displayName}`} />
                </div>
                <div className="border-x-[2px] rounded border-valorant-red px-2 mb-4 mt-2">
                    <p className="ml-2">{agent.description}</p>

                </div>
                <Button onClick={() => getSelectedAgent(agent)}>Select Agent</Button>
            </div >)}
    </div>

    )
}

