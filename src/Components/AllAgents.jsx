import Button from "./Button"
export default function AllAgents({ agents, setSelectedId, getSelectedAgent }) {
    return (
        <>
            {agents.map(agent => <div key={agent.uuid} className="border-2 border-primary rounded-md p-2">
                <div className="flex items-center mb-1">
                    <img className="max-h-16 bg-primary rounded-full " src={agent.displayIcon} alt="" />
                    <h1 className="text-2xl ml-3">{agent.displayName}</h1>
                </div>
                <p className="mb-4">{agent.description}</p>
                <Button onClick={() => {
                    setSelectedId(agent.uuid)
                    getSelectedAgent()
                }}>View more</Button>
            </div>)
            }
        </>

    )
}

