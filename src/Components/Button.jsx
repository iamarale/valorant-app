export default function Button({ onClick, children }) {
    return <button className="border-primary border-2 rounded px-1 py-0.5 duration-200 hover:bg-opacity-60 hover:bg-primary" onClick={onClick}>{children}</button>
}
