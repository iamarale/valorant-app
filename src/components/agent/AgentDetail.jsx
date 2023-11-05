import Button from "../UI/Button";

export default function AgentDetail({ selectedAgent, setSelectedAgent }) {
    console.log(selectedAgent.displayName);

    function resetSelectedAgent() {
        setSelectedAgent("");
    }

    return (<div className={`border-2 border-dark-gray text-dark-gray rounded p-2 `} key={selectedAgent.uuid}>
        <header className="flex justify-between items-center">
            <div className="mb-4">

                <h1 className="text-2xl text-dark-gray">{selectedAgent.displayName}</h1>
                <p className="bg-valorant-red text-beige text-sm max-w-fit px-2 rounded-full">{selectedAgent.role.displayName}</p>
            </div>
            <img className="max-h-12 sm:max-h-14 md:max-h-16 bg-valorant-red p-1 rounded-full" src={selectedAgent.displayIcon} alt="" />
        </header>
        <p className="text-sm text-dark-gray">{selectedAgent.description}</p>
        <hr className="bg-dark-gray p-[1px] my-3"></hr>
        <div className="">
            <div className="flex justify-between items-center">
                <h3 className="">Role</h3>
                <img className="bg-valorant-red max-h-8 rounded-full mb-1" src={selectedAgent.role.displayIcon} alt="" />
            </div>
            <p className="text-sm">{selectedAgent.role.description}</p>
        </div>
        <hr className="bg-dark-gray p-[1px] my-3"></hr>
        <div>
            <div></div>
            {selectedAgent.abilities.map(ability => <ul key={ability.displayName} className="my-3">
                <div className="flex items-center justify-between">

                    <li>{ability.slot}</li>
                    <li className="flex items-center justify-between">{ability.displayName}</li>
                    <li><img className="max-h-8 bg-valorant-red rounded-full" src={ability.displayIcon} alt="" /></li>
                </div>
                <li>{ability.description}</li>
            </ul>)}
        </div>
        <Button onClick={resetSelectedAgent}>View all Agents</Button>
    </div>
    );
}
