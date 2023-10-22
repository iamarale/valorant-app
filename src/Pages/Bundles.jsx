import Header from "../Components/Header"
export default function Bundles({ bundles }) {
    console.log(bundles)
    return (<>
        <Header />
        <main className="container mx-auto">
            <h1>Bundles</h1>
            <input />
            {bundles && bundles.map(bundle => <div>{bundle.displayName}</div>)}
        </main>
    </>
    )
}

