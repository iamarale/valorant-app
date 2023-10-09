import Button from "./UI/Button"
import DisplayPortait from "./UI/DisplayPortrait"
import Tags from "./Tags";
import { BiArrowBack } from "react-icons/bi";


export default function AgentDetail({ setSelectedId, selectedAgent }) {

    function clearSelectedAgent() {
        setSelectedId("")
    }
    return <>
        {selectedAgent && selectedAgent.map(agent => <div key={agent.uuid} className="border-2 min-h-full container mx-auto border-accent rounded-md p-2 col-span-4 ">
            {/* Images */}
            <div className="hidden md:block">
                <h1 className="text-xl underline font-semibold mb-2">Images</h1>
                <ul className="flex justify-between items-center">
                    <li><DisplayPortait styles={"h-24"} path={agent.displayIcon} about={`A picture of ${agent.displayName}`} /></li>
                    <li><DisplayPortait styles={"h-64"} path={agent.fullPortraitV2} about={`A picture of ${agent.displayName}`} /></li>
                    <li><DisplayPortait styles={"h-32"} path={agent.background} about={`A picture of ${agent.displayName}`} /></li>
                </ul>
            </div>

            {/* About the agent */}
            <header>
                <h1 className="text-4xl font-bold text-secondary mb-2">{agent.displayName}</h1>
                <h1 className="text-lg underline font-semibold mb-2">Description</h1>
                <p className="mb-4 ">{agent.description}</p>
            </header>

            {/* role and icons */}
            <div className="my-4">
                <h1 className="text-lg underline font-semibold mb-2">Role</h1>
                <div className="flex items-center gap-2">
                    <Tags>{agent.role.displayName}</Tags>
                    <DisplayPortait styles={"h-8"} path={agent.role.displayIcon} about={`${agent.role.displayName} icon for agent ${agent.displayName}`} />
                </div>
                <p>{agent.role.description}</p>
            </div>

            <hr className="my-12" />

            {/* displays abilities and tacticals*/}
            <div className="mb-8">
                <h1 className="text-xl underline font-semibold mb-2 text-center">Skills</h1>

                <div className="flex justify-between font-bold uppercase pl-4 mt-8 mb-4 underline text-accent">
                    <p>type</p>
                    <p>Icon</p>
                    <p>Name</p>
                </div>
                {agent.abilities.map(ability => <div key={ability.displayName} className="border-l-2 border-accent rounded-lg pl-4 ">
                    {/*  */}
                    <ul className="mb-6">
                        <li className="flex justify-between">
                            <span className="font-bold text-accent uppercase">{ability.slot}</span>
                            <DisplayPortait styles={"h-8"} path={ability.displayIcon} about={`A picture of the ability ${ability.displayName}`} />
                            <h3 className="font-bold text-accent uppercase justify-self-end col-span-4">{ability.displayName}</h3>

                        </li>
                        <li className="text-background col-span-2">{ability.description}</li>
                    </ul>
                </div>)}
            </div>

            {/* btn goes back to viewing all agents */}
            <Button onClick={clearSelectedAgent}>

                <BiArrowBack className="mr-2" />
                All agents
            </Button>
        </div >)
        }
    </>
}