import { Link } from "react-router-dom";
export default function Button({ style, to, onClick, children }) {
    const defaultStyles = `flex items-center px-2 py-1 border-primary border-2 rounded min-h-[20px] w-fit duration-200 hover:bg-opacity-60 hover:bg-primary`;

    return <Link
        className={`${defaultStyles} ${style}`}
        onClick={onClick}>{children}</Link>
}
