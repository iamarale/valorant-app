export default function Tags({ isDark, children }) {
    return <span className={`inline-block  rounded-xl px-1.5 ${isDark ? "bg-dm-accent text-lm-text" : "bg-lm-accent text-dm-text"}`}> <small>{children}</small></span>
}