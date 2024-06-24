
import styles from "./ProgressIndicator.module.css"
import clsx from "clsx";

type Props = {
    status: string;
    subject: string;
}
const ProgressIndicator = ({status, subject}: Props)=> {

    return (
        <div className={clsx(styles.label,{
            [styles.notFound]: status === "",
            [styles.complete]: status === "Done",
            [styles.inProgress]: status === "In progress",
            [styles.notStarted]: status === "Not started",
        })}>
            <h5>{subject}</h5>
        </div>
    )
}

export default ProgressIndicator