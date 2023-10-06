import Header from "../Components/Header"
import MainContent from "../Components/MainContent"
export default function Homepage({ isLoading, setSelectedId, selectedId, agents }) {
    return (
        <>
            <Header />
            <main className={`bg-secondary-light text-secondary duration-200`}>
                {/* displays content based on nav option */}
                <MainContent isLoading={isLoading} setSelectedId={setSelectedId} selectedId={selectedId} agents={agents} />
            </main>
        </>

    )
}

