export default function DisplayPortait({ styles, path, about }) {

    return <img className={styles} src={path} alt={about} />
}