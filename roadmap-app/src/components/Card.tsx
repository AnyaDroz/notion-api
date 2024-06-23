import styles from "./Card.module.css"
type Props = {
    label: string
}
const Card = ({label}: Props) => {
    return (
        <div className={styles.card}>
            <p>Category</p>
            <h4 className={styles.title}>{label}</h4>
        </div>
    )
}

export default Card