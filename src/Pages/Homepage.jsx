import Header from "../components/Header";

export default function Homepage() {
    return <div className="h-ful text-dark-gray">
        <Header />
        <main className="pt-4 container mx-auto ">
            <h1 className="text-3xl font-light">Find all things valorant! We provide you with quick and easy access to the latest agents, bundles and weapons released to <span className="text-valorant-red">Riot games Valorant</span>!</h1>

            <ul className="mt-8">
                <li className="list-disc text-sm"><span className="text-md font-semibold text-valorant-red uppercase">Simplicity:</span> User friendly UI to help you navigate and search for what you need without hassle or frustration</li>
                <li className="list-disc text-sm"><span className="text-md font-semibold text-valorant-red uppercase">Up-to-Date:</span> Newly released agents, bundles and weapons will be released here so youll be first to know!</li>
                <li className="list-disc text-sm"><span className="text-md font-semibold text-valorant-red uppercase">Easy to understand:</span> The information offered will help you understand and succeed in valorant</li>
            </ul>
        </main>
    </div>
}

