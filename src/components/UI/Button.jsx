export default function Button({ onClick, children }) {
    return <button className="border-2 border-dark-gray px-2 rounded duration-200 hover:bg-valorant-red hover:text-light-gray" onClick={onClick}>{children}</button>
}

