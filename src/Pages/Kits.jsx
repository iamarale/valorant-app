import Header from "../Components/Header";

export default function Kits({ weapons, gear }) {
    console.log(gear)
    console.log(weapons)
    return (
        <div className="bg-primary h-screen">
            <Header />
            <main className="container mx-auto">
                <h1 className="text-4xl text-center font-bold mt-3 mb-6 text-primary">Kits</h1>

                <div className="grid gap-1 grid-cols-5 grid-rows-6">
                    <div className="row-span-6 bg-red-500">
                        <h1>SIDEARMS</h1>
                        <p>CLASSIC</p>
                        <p>SHORTY</p>
                        <p>FRENZY</p>
                        <p>GHOST</p>
                        <p>SHERIFF</p>
                    </div>
                    <div className="bg-purple-200 col-start-2 row-span-3 row-start-">
                        <h1>SMGS</h1>

                    </div>
                    <div className="bg-green-200 col-start-2 row-span-3">SHOTGUNS</div>
                    <div className="bg-yellow-200 col-start-3 row-start-1 row-span-6">RIFLES</div>
                    <div className="bg-cyan-200 col-start-4 row-start-1 row-span-3">SNIPER</div>
                    <div className="bg-orange-800 col-start-4 row-start-4 row-span-full">SHIELDS</div>
                    <div className="bg-orange-200 col-start-5 row-start-1 row-span-full">SHIELDS</div>
                </div>

            </main>
        </div>
    )
}

