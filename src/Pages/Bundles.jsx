import { useState } from "react";
import Header from "../components/Header";
import Button from "../components/UI/Button";

export default function Bundles({ bundles }) {
    const [favoriteBundles, setFavoriteBundle] = useState([])

    function addtoFavorite(fav) {
        setFavoriteBundle([...favoriteBundles, fav])
        console.log(favoriteBundles)
    }

    return <div className="h-full">
        <Header />
        <main className="container mx-auto flex items-center flex-col text-dark-gray mt-6">
            <form className="max-w-xl flex mx-auto container">
                <input className="border-2 rounded-l- border-r-0 flex-[1] border-dark-gray px-2 py-2 lg:py-1" type="text" placeholder="Search for a bundle" />
                <Button leftNotRound={true}>Search </Button>

            </form>
            {bundles && bundles.map(bundle => <div key={bundle.uuid} className="border-2 border-dark-gray my-2 rounded-lg">
                <img className="max-w-xl rounded-t-lg" src={bundle.displayIcon} alt={`A picture of ${bundle.displayName}`} />
                <div className="p-2">
                    <h1 className="text-lg font-thin pb-2">{bundle.displayName}</h1>
                    <Button onClick={() => addtoFavorite(bundle)}>Favorite</Button>
                </div>
            </div>)}
        </main>
    </div>
}

