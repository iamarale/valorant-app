import Header from "../components/Header";

export default function Agents({ allAgents, isLoading }) {
    console.log(allAgents)
    // Displays if data isn't loaded yet
    if (isLoading) {
        return <div className="bg-valorant-red h-full">
            <Header />
            <h1 className="text-center text-3xl font-bold">Loading data</h1>
        </div>
    }

    // Displaying of the agents
    return <div className="bg-beige h-full">
        <Header />
        <main className="grid gap-2 my-4 px-2 md:grid-cols-2 lg:grid-cols-3">
            {allAgents ? allAgents.map(agent => {
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
                                <h3 className="">Role Icon</h3>
                                <img className="bg-valorant-red max-h-8 rounded-full mb-1" src={agent.role.displayIcon} alt="" />
                            </div>
                            <p className="text-sm">{agent.role.description}</p>
                        </div>
                    </div>
                }
            }
            ) : <h1>There was a problem fetching data</h1>}
        </main>
    </div>
}

