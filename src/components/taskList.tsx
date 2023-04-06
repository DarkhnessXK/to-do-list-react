import styles from './taskList.module.css'

export function TaskList() {


    return (

        <div className={styles.taskList}>
            <header className={styles.taskInfo}>
                <div className={styles.leftInfo}>
                    <span className={styles.leftInfoText}>Tarefas criadas </span>
                    <span className={styles.leftInfoCounter}>0</span>
                </div>
                <div className={styles.rightInfo}>
                    <span className={styles.rightInfoText}>Concluidas </span>
                    <span className={styles.rightInfoCounter}>0</span>
                </div>
            </header>

            <div className={styles.taskBoxGlobal}>
                Content

            </div>

        </div>

    );
}