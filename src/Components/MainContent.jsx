export default function MainContent({ curSelected, setCurSelected, valData, isLoading }) {
    return <div className="grid gap-4 justify-center  container mx-auto sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3">
        {valData &&
            valData.map(agent =>
                <div key={agent.displayName} className="bg- rounded">
                    <h1 className="text-3xl">{agent.displayName}</h1>
                    <p>{agent.description}</p>
                    <div>
                        <p>Iconography</p>
                        
                    </div>
                </div>)}
    </div>
}

// text: #ececef
// background: #121615
// primary: #2A6551
// secondary: #020203
// accent: #adafb8