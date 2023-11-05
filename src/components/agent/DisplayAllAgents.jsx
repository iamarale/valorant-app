import Button from "../UI/Button"
export default function DisplayAllAgents({ allAgents, setSelectedAgent }) {
    function getSelectedAgent(selectedAgent) {
        setSelectedAgent(selectedAgent)
    }
    return (
        allAgents.map(agent => <div key={agent.uuid} className="border-2 border-dark-gray text-dark-gray rounded p-2">
            <div className="flex items-center justify-between">
                <h1>{agent.displayName}</h1>
                <img className="h-8 md:h-12 lg:h-16" src={agent.displayIcon} alt={`A picture of the valorant agent ${agent.displayName}`} />
            </div>
            <Button onClick={() => getSelectedAgent(agent)}>Select Agent</Button>
        </div>)

    )
}
