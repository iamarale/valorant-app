import Tags from "./Tags"
export default function Agent({ agentData }) {
    // console.log(agentData.displayName)

    return <>
        {agentData && agentData.map(agent => <div key={agent.uuid} className="border-[1px] p-2 rounded">
            <img className="max-w-[72px] md:max-w-[90px] lg:max-w-[120px]" src={agent.displayIcon} alt="" />
            <div>
                <h1 className="text-lg font-bold underline mb-3 inline-block">{agent.displayName}</h1>
                <Tags>{agent.role?.displayName}</Tags>
            </div>
            <div className="max-w-[16rem] md:max-w-full">
                <p className="font-light">{agent.description}</p>
            </div>
        </div>)
        }
    </>
}