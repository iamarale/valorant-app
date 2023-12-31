export default function Button({ leftNotRound, onClick, children }) {
    return <button className={`${!leftNotRound ? "border-2 border-dark-gray px-2 rounded duration-200 hover:bg-valorant-red hover:text-light-gray lg:py-1" : "border-2 border-dark-gray px-2 rounded rounded-l-none duration-200 hover:bg-valorant-red hover:text-light-gray lg:py-1"}`} onClick={onClick}>{children}</button>
}

// border-2 border-dark-gray px-2 rounded duration-200 hover:bg-valorant-red hover:text-light-gray lg:py-1
