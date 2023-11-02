import { Link } from "react-router-dom";

export default function PageNotFound() {
    return <div className="h-full bg-valorant-red text-light-gray flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold">Page not found</h1>
        <h3 className="text-3xl font-semibold mt-2 mb-6">Please go back to the homepage!</h3>
        <Link to="/">Homepage</Link>
    </div>
}

