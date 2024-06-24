import styles from "./Card.module.css"
type Props = {
    label: string
    url: string
    category: string
}
const Card = ({label, url, category}: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.label}></div>
            <div className={styles.cardContent}>
            <p>{category}</p>
                <a href={url}>
            <h4 className={styles.title}>{label}</h4>
                </a>
            </div>
        </div>
    )
}

export default Card