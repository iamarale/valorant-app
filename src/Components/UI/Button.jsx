export default function Button({ onClick, children }) {
    return <button
        className="flex items-center px-2 py-1 border-primary border-2 rounded min-h-[20px] duration-200 hover:bg-opacity-60 hover:bg-primary"
        onClick={onClick}>{children}</button>
}
