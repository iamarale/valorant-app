import { Link } from "react-router-dom";
export default function Button({ style = "btn-styles", to, onClick, children }) {

    return <Link
        className={`btn-styles ${style}`}
        onClick={onClick}>{children}</Link>
}
