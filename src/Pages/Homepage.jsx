import Header from "../Components/Header"
import MainContent from "../Components/MainContent"
export default function Homepage({ isLoading, setSelectedId, selectedId, agents }) {
    return (
        <>
            <Header />

            <main className={`min-h-full px-2 duration-200 bg-background`}>
                {/* displays content based on nav option*/}
                <MainContent isLoading={isLoading} setSelectedId={setSelectedId} selectedId={selectedId} agents={agents} />
            </main>
        </>

    )
}

