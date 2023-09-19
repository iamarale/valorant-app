import PropTypes from 'prop-types';
import Tags from "./Tags"
export default function Agents({ agentData, isDark }) {
    // console.log(agentData.displayName)
    Agents.propTypes = {
        isDark: PropTypes.bool.isRequired,
        agentData: PropTypes.array.isRequired,
    };

    return <>
        {agentData && agentData.map(agent => <div key={agent.uuid} className={`border-[2px] p-2 max-w-sm rounded-md flex flex-col ${!isDark ? "border-lm-primary" : "border-dm-primary"}`}>
            <img className="max-w-[72px] md:max-w-[90px] lg:max-w-[120px]" src={agent.displayIcon} alt="" />
            <h1 className="text-lg font-bold underline  inline-block mr-3 mt-2">{agent.displayName}</h1>
            <div className="flex items-center">
                <Tags isDark={isDark}>{agent.role?.displayName}</Tags>
                <img className={`h-[20px] bg-dm- ml-2 rounded-xl`} src={agent.role?.displayIcon} alt={`icon of role ${agent.role?.description}`} />
            </div>
            <div className="max-w-full md:max-w-full pt-2 pb-8">
                <p className={``}>{agent.description}</p>
            </div>
            <button className={`mt-auto max-w-max py-1 px-3 rounded duration-200 hover:bg-opacity-50 ${isDark ? "bg-dm-primary " : "bg-lm-primary"}`}>Learn More</button>
        </div>)
        }
    </>
}