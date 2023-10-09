import Button from "./UI/Button";
import DisplayPortait from "./UI/DisplayPortrait";

export default function AllAgents({ agents, setSelectedId, getSelectedAgent }) {
    return (
        <>
            {
                agents.map(agent => {
                    if (agent.isPlayableCharacter) return <div key={agent.uuid} className="border-2 border-accent rounded-md p-2">
                        <div className="flex items-center mb-1">
                            <DisplayPortait styles={"h-16 md:h-24"} path={agent.displayIcon} about={`A headshot of ${agent.displayIcon}`} />
                            <h1 className="text-2xl ml-3">{agent.displayName}</h1>
                        </div>
                        <p className="mb-4">{agent.description}</p>
                        <Button onClick={() => {
                            setSelectedId(agent.uuid)
                            getSelectedAgent()
                        }}>View more</Button>
                    </div>
                })
            }
        </>

    )
}

