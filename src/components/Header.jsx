import { Link } from "react-router-dom";

export default function Header() {
    return <header className="bg-light-gray text-valorant-red">
        <div className="container mx-auto flex justify-between items-center py-8 px-2">

            <h1>Logo</h1>
            <nav>
                <ul className="flex">
                    <li className="mx-1 duration-200 hover:underline hover:scale-110 "><Link to="/">Home</Link></li>
                    <li className="mx-1 duration-200 hover:underline hover:scale-110 "><Link to="/agents">Agents</Link></li>
                    <li className="mx-1 duration-200 hover:underline hover:scale-110 "><Link to="/bundles">Bundles</Link></li>
                    <li className="mx-1 duration-200 hover:underline hover:scale-110 "><Link to="/kits">Kits</Link></li>
                </ul>
            </nav>

        </div>
    </header>
}

