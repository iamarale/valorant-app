import { Navigation } from "./Navigation";

export default function Header() {

    return <header className="bg-background p-2 text-center">

        <h1 className="text-3xl font-bold">The Valorant Spot</h1>
        <h2 className="text-xl inline-block">Learn about agents, see all skins, and view all playable weapons </h2>
        <Navigation />
    </header>
}