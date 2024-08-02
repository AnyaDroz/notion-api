import styles from "./Card.module.css"
import ProgressIndicator from "./ProgressIndicator";
type Props = {
    label: string
    url: string
    category: string
    status: string
    subject: string
}
const Card = ({label, url, category, status, subject}: Props) => {
    return (
        <div className={styles.card}>
            <ProgressIndicator status={status} subject = {subject}/>
            <div className={styles.cardContent}>
            <p className={styles.categoryLabel}>{category}</p>
                <a href={url}>
            <h5 className={styles.title}>{label}</h5>
                </a>
                <p>12 Aug 23 - 13 Aug 23</p>
            </div>
        </div>
    )
}

export default Card