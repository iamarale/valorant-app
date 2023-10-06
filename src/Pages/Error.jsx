import { defaults } from "autoprefixer";
import Header from "../Components/Header";
import { NavLink } from "react-router-dom";
export default function Error() {
    const defaultStyles = `flex items-center px-8 py-2 border-primary border-2 rounded min-h-[20px] w-fit duration-200 hover:bg-opacity-60 hover:bg-primary`;
    return (<>
        <Header />
        <main className="container mx-auto px-2">
            <h1 className="text-6xl uppercase mb-3">you&apos;ve encountered an error</h1>
            <h2 className="text-3xl mb-8">Go back to the homepage!</h2>
            <NavLink className={`${defaultStyles}`} to="/">Home</NavLink>
        </main >
    </>
    )
}

