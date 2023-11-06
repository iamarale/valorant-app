import { Link } from "react-router-dom";

export default function PageNotFound() {
    return <div className="h-screen bg-valorant-red text-light-gray flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold">Page not found</h1>
        <h3 className="text-3xl font-semibold mt-2 mb-6">Please go back to the homepage!</h3>
        <Link className="border-2 py-2 px-4 rounded duration-200 hover:bg-light-gray hover:text-valorant-red" to="/">Homepage</Link>
    </div>
}

