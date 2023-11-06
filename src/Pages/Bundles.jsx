import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/UI/Button";
import { BiHeart } from "react-icons/bi";

export default function Bundles({ bundles }) {
    const [favoriteBundles, setFavoriteBundle] = useState([]);
    const [searchBundle, setSearchBundle] = useState("")
    document.title = "Bundles"

    function addtoFavorite(favorite) {
        const isFavoriteAlreadyAdded = favoriteBundles.some((bundle) => bundle.displayName === favorite.displayName);

        if (!isFavoriteAlreadyAdded) {
            setFavoriteBundle((prevFavoriteBundles) => [...prevFavoriteBundles, favorite]);
        }
    }

    // const filteredBundles = bundles.filter(bundle => bundle.displayName.toLowerCase().includes(searchBundle.toLowerCase()));
    const filteredBundles = bundles.filter(bundle => {
        return bundle.displayName.toLowerCase().includes(searchBundle.toLowerCase());
    }
    )


    return <div className="h-full">
        <Header />
        {searchBundle}
        <main className="container mx-auto flex items-center flex-col text-dark-gray mt-6 p-2">
            <form className="md:max-w-2xl flex mx-auto container" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="border-2 rounded-lg  flex-[1] border-dark-gray px-2 py-2 lg:py-1"
                    type="text"
                    placeholder="Search for a bundle"
                    onChange={(e) => setSearchBundle(e.target.value)}
                    value={searchBundle}
                />
            </form>
            <div className="container mx-auto flex items-center pt-2 pb-4">
                <BiHeart className="self-start hover:cursor-pointer hover:scale-110" size={24} style={{ color: "red" }} />
                <span>{favoriteBundles.length}</span>
            </div>
            <ul className="flex items-center flex-wrap gap-2">
                {favoriteBundles ? favoriteBundles.map((favorite, index) =>
                    <li key={favorite.displayName} className="border-2 border-dark-gray"><span className="text-lg px-1">{index + 1} </span>{favorite.displayName}</li>)
                    : null}
            </ul>

            {!searchBundle ? bundles.map(bundle => <div key={bundle.uuid} className="border-2 border-dark-gray my-2 rounded-lg">
                <img className="md:max-w-2xl rounded-t-lg" src={bundle.displayIcon} alt={`A picture of ${bundle.displayName}`} />
                <div className="p-2">
                    <h1 className="text-lg underline font-thin pb-2">{bundle.displayName}</h1>
                    <Button onClick={() => addtoFavorite(bundle)}>Favorite</Button>
                </div>
            </div>) : (
                filteredBundles.map(bundle => (
                    <div key={bundle.uuid} className="border-2 border-dark-gray my-2 rounded-lg">
                        <img className="md:max-w-2xl rounded-t-lg" src={bundle.displayIcon} alt={`A picture of ${bundle.displayName}`} />
                        <div className="p-2">
                            <h1 className="text-lg underline font-thin pb-2">{bundle.displayName}</h1>
                            <Button onClick={() => addtoFavorite(bundle)}>Favorite</Button>
                        </div>
                    </div>
                ))
            )}
        </main>
    </div>
}

// <div key={bundle.uuid} className="border-2 border-dark-gray my-2 rounded-lg"> </div>