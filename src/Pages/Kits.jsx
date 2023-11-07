import Header from "../components/Header";

export default function Kits({ weapons, shields }) {
    document.title = "Weapons and Shields"
    console.log(weapons, shields)

    return <div>
        <Header />
        <h1>Kits</h1> </div>
}

