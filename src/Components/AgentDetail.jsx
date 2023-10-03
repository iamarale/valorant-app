import Button from "./Button"
import DisplayPortait from "./DisplayPortrait"

export default function AgentDetail({ selectedAgent }) {

    return <>
        {selectedAgent && selectedAgent.map(agent => <div key={agent.uuid} className="border-2 border-primary rounded-md p-2 grid-cols-9">
            <h1 className="underline text-2xl">Images</h1>
            <div className="flex items-center ">
                <DisplayPortait styles={"h-24"} path={agent.displayIcon} about={`A picture of ${agent.displayName}`} />
                <DisplayPortait styles={"h-64"} path={agent.fullPortraitV2} about={`A picture of ${agent.displayName}`} />
                <DisplayPortait styles={"h-32"} path={agent.background} about={`A picture of ${agent.displayName}`} />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-primary">{agent.displayName}</h1>
                <p>{agent.description}</p>
            </div>
            <Button>All agents</Button>
        </div>)}
    </>
}