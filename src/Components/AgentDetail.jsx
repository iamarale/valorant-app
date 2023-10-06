import Button from "./UI/Button"
import DisplayPortait from "./UI/DisplayPortrait"
import Tags from "./Tags";
import { BiArrowBack } from "react-icons/bi";


export default function AgentDetail({ setSelectedId, selectedAgent }) {

    function clearSelectedAgent() {
        setSelectedId("")
    }
    return <>
        {selectedAgent && selectedAgent.map(agent => <div key={agent.uuid} className="border-2 min-h-full border-primary rounded-md p-2 col-span-4 ">
            {/* Images */}
            <div className="hidden md:block">
                <h1 className="text-xl underline font-semibold mb-2">Images</h1>
                <ul className="flex justify-between">
                    <li><DisplayPortait styles={"h-24"} path={agent.displayIcon} about={`A picture of ${agent.displayName}`} /></li>
                    <li><DisplayPortait styles={"h-64"} path={agent.fullPortraitV2} about={`A picture of ${agent.displayName}`} /></li>
                    <li><DisplayPortait styles={"h-32"} path={agent.background} about={`A picture of ${agent.displayName}`} /></li>
                </ul>
            </div>

            {/* About the agent */}
            <header>
                <h1 className="text-4xl font-bold text-primary mb-2">{agent.displayName}</h1>
                <h1 className="text-lg underline font-semibold mb-2">Description</h1>
                <p className="mb-4">{agent.description}</p>
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
                {agent.abilities.map(ability => <div key={ability.displayName} className="border-l-2 rounded-lg border-primary pl-5">
                    {/*  */}

                    <ul className="my-8">
                        <li className="grid grid-cols-6">
                            <span>{ability.slot}</span>
                            <DisplayPortait styles={"h-8"} path={ability.displayIcon} about={`A picture of the ability ${ability.displayName}`} />
                            <h3 className="font-bold text-primary uppercase justify-self-end col-span-4">{ability.displayName}</h3>

                        </li>
                        <li className="text-gray-400 col-span-2">{ability.description}</li>
                    </ul>
                </div>)}
            </div>

            {/* btn goes back to viewing all agents */}
            <Button onClick={clearSelectedAgent}>

                <BiArrowBack className="mr-2" />
                All agents
            </Button>
        </div>)}
    </>
}