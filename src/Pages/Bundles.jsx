import { useState } from "react";
import Header from "../Components/Header"

export default function Bundles({ bundles }) {
    const [searchInput, setSearchInput] = useState('');



    // filters the value of inpujt
    const filteredBundles = bundles.filter((bundle) =>
        bundle.displayName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <>
            <Header />
            <main className="container mx-auto text-primary p-1">
                <h1 className="text-4xl text-center font-bold mt-3 mb-6">Bundles</h1>
                <input
                    className="px-2 py-1 rounded mx-auto w-full lg:py-2 lg:px-4"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search for a bundle"
                />

                {/* Show filtered bundles */}
                <div className="grid sm:grid-cols-2 gap-2 md:grid-cols-3">
                    {filteredBundles.map((bundle) => (
                        <div key={bundle.uuid}>
                            <h2>{bundle.displayName}</h2>
                            <img className="rounded-lg" src={bundle.displayIcon} alt={`A picture of the bundle set ${bundle.displayName}`} />
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

