export default function Tags({ isDark, children }) {
    return <span className={`inline-block ${isDark ? "bg-dm-primary" : "bg-lm-primary"}bg-gray-dark text-gray-light rounded-lg px-0.5 mx-1`}> <small>{children}</small></span>
}