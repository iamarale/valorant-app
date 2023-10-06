import { Navigation } from "./Navigation";

export default function Header() {

    return <header className={`border-b-2 py-8 mb-6 container mx-auto `}>
        <h1 className="text-3xl font-bold">The Valorant Info Hub</h1>
        <h2 className="text-xl inline-block">All things valorant</h2>
        <Navigation />
    </header>
}