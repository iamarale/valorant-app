import { FiSun, FiMoon } from "react-icons/fi";
export default function ({ toggleIsDark, isDark }) {
    return <header className={`border-b-2 py-8 mb-6 container mx-auto ${!isDark ? "border-b-lm-primary" : "border-b-dm-primary"}`}>
        <h1 className="text-3xl font-bold">The Valorant Info Hub</h1>
        <h2 className="text-xl inline-block">All things valorant</h2>
        {isDark ? <FiSun className="cursor-pointer" size={25} onClick={() => toggleIsDark(!isDark)} /> : <FiMoon className="cursor-pointer" size={25} onClick={() => toggleIsDark(!isDark)} />}
    </header>
}