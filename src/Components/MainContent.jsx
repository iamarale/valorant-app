export default function MainContent({ curSelected, setCurSelected, valData, isLoading }) {

    function getAgentInfo() {

        valData.map()
    }

    return <div className="grid gap-4 justify-center container mx-auto mt-16 sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3">
        {valData &&
            valData.map(agent => {
                if (agent.isPlayableCharacter) return <div key={agent.uuid} className="border-[1px] border-primary p-2 max-w-sm rounded">
                    <header className="flex items-center">
                        <img className="h-[50px]" src={agent.displayIcon} alt="" />
                        <h1 className="text-3xl text-primary ml-4">{agent.displayName}</h1>
                    </header>
                    <p className="mb-4">{agent.description}</p>
                    <button
                        className="bg-primary text-text py-2 px-3 rounded duration-150 hover:bg-opacity-80"
                        onClick={() => setCurSelected(agent.uuid)}
                    >More Details</button>
                </div>
            })}
        {curSelected && <p>Hello</p>}

    </div>
}

// text: #ececef
// background: #121615
// primary: #2A6551
// secondary: #020203
// accent: #adafb8