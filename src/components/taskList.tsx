import styles from './taskList.module.css'

import Clipboard from '../assets/Clipboard.svg';

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

                <img src={Clipboard} />

                <p>Você ainda não tem tarefas cadastradas</p>

                <p>Crie tarefas e organize seus itens a fazer</p>

            </div>

        </div>

    );
}