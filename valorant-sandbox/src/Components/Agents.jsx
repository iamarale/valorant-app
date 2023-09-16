import Tags from "./Tags"
export default function Agent({ agentData, isDark }) {
    // console.log(agentData.displayName)

    return <>
        {agentData && agentData.map(agent => <div key={agent.uuid} className={`border-[2px] border-lm-accent text-lm-accent p-2 max-w-sm rounded`}>
            <img className="max-w-[72px] md:max-w-[90px] lg:max-w-[120px]" src={agent.displayIcon} alt="" />
            <div>
                <h1 className="text-lg font-bold underline mb-3 inline-block">{agent.displayName}</h1>
                <Tags>{agent.role?.displayName}</Tags>
            </div>
            <div className="max-w-full md:max-w-full">
                <p className={`${!isDark ? "text-lm-text" : "text-dm-text"}`}>{agent.description}</p>
            </div>
        </div>)
        }
    </>
}