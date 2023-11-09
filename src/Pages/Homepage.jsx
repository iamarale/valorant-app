import Header from "../components/Header";

export default function Homepage() {
    document.title = "Homepage of Valorant Information Hub";


    return <div className=" text-dark-gray">
        <Header />
        <section>
            <div className="h-[75vh] bg-coverbg-center bg-[url(https://wallpapers.com/images/featured-full/valorant-305kescxw5dpup7y.jpg)] lg:bg-[url(https://wallpaperaccess.com/full/3037903.jpg)] ">
                {/* <img className="rounded-lg mb-4 md:max-w-sm lg:max-w-xl " src="https://wallpaperaccess.com/full/3037903.jpg" alt="" /> */}
                <div className="flex items-center justify-center flex-col px-2 h-full bg-black bg-opacity-40 sm:text-center">

                    <h1 className="text-3xl font-bold mb-2 text-light-gray ">Discover the world of Valorant today!</h1>
                    <p className="text-light-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, et veritatis odio placeat enim magni temporibus ipsum fuga non rem?</p>
                </div>
            </div>
            <div className="container mx-auto px-2 flex flex-col xl:grid xl:grid-cols-2 xl:place-items-center mt-32">
                <div className="xl:pr-12 flex flex-col justify-center">

                    <p className="text-sm lg:text-md font-semibold">Discover</p>
                    <h1 className="text-2xl font-bold xl:text-6xl">Unlease your tactical skills in Valorant</h1>
                    <p className=" mt-2 mb-8 text-md lg:text-lg lg:mt-4">Valorant is a thrilling first-person shooter that combines precise aim, strategic gameplay, and unique agent abilities. Using this website you can learn more about agents and their abilities, bundles, weapons and shields so you don&apos;t feel left behind.</p>
                </div>
                <img className="rounded" src="https://media.valorant-api.com/bundles/b6b1b7ea-4a10-f810-a416-03adbb69d379/displayicon.png" alt="" />
            </div>
            <div className="container mx-auto mt-32">
                <h1>FAQ</h1>
            </div>
        </section>
    </div>
}

