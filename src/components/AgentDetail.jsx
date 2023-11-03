export default function AgentDetail({ allAgents }) {
    return (
        allAgents && allAgents.map(agent => {
            if (agent.isPlayableCharacter) {
                return <div className={`border-2 border-dark-gray text-dark-gray rounded p-2 bg-[url()]`} key={agent.uuid}>
                    <header className="flex justify-between items-center">
                        <div className="mb-4">

                            <h1 className="text-2xl text-dark-gray">{agent.displayName}</h1>
                            <p className="bg-valorant-red text-beige text-sm max-w-fit px-2 rounded-full">{agent.role.displayName}</p>
                        </div>
                        <img className="max-h-12 sm:max-h-14 md:max-h-16 bg-valorant-red p-1 rounded-full" src={agent.displayIcon} alt="" />
                    </header>
                    <p className="text-sm text-dark-gray">{agent.description}</p>
                    <hr className="bg-dark-gray p-[1px] my-3"></hr>
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h3 className="">Role</h3>
                            <img className="bg-valorant-red max-h-8 rounded-full mb-1" src={agent.role.displayIcon} alt="" />
                        </div>
                        <p className="text-sm">{agent.role.description}</p>
                    </div>
                    <hr className="bg-dark-gray p-[1px] my-3"></hr>
                    <div>
                        <div></div>
                        {agent.abilities.map(ability => <ul key={ability.displayName} className="my-3">
                            <div className="flex items-center justify-between">

                                <li>{ability.slot}</li>
                                <li className="flex items-center justify-between">{ability.displayName}</li>
                                <li><img className="max-h-8 bg-valorant-red rounded-full" src={ability.displayIcon} alt="" /></li>
                            </div>
                            <li>{ability.description}</li>
                        </ul>)}
                    </div>
                </div>
            }
        }
        )
    );
}
