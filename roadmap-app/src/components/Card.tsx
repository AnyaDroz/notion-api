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
            <p>{category}</p>
                <a href={url}>
            <h4 className={styles.title}>{label}</h4>
                </a>
            </div>
        </div>
    )
}

export default Card