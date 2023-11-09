import Header from "../components/Header";

export default function Kits({ weapons, shields }) {
    document.title = "Weapons and Shields"
    console.log(weapons, shields)

    return <>
        <Header />
        <section>
            <h1>Weapons and Shields</h1>
        </section>
    </>
}

