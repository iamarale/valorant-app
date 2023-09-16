import { FiSun, FiMoon } from "react-icons/fi";
export default function ({ toggleIsDark, isDark }) {
    return <header className={`border-b-2 py-8 mb-6 container mx-auto `}>
        <h1 className="text-4xl font-bold">The Valorant Info Hub</h1>
        <div className="flex justify-around py-4">
            <h2 className="text-lg">All things valorant</h2>
            {!isDark ? <FiSun className="cursor-pointer" size={25} onClick={() => toggleIsDark(!isDark)} /> : <FiMoon className="cursor-pointer" size={25} onClick={() => toggleIsDark(!isDark)} />}
        </div>
    </header>
}