import { FiSun } from "react-icons/fi";
export default function ({ isDark }) {
    return <header className={`border-b-2 py-8 mb-6 container mx-auto `}>
        <h1 className="text-4xl font-bold">The Valorant Info Hub</h1>
        <div className="">
            <h2 className="text-lg">All things valorant</h2>
            {!isDark ? <FiSun /> : "light"}
        </div>
    </header>
}