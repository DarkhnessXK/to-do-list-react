import styles from './new-task.module.css'

export function Tasks(){


    return(
        <div className={styles.newTask}>
            <input className={styles.taskInput} placeholder='Adicione uma nova tarefa'></input>
            <button type="submit">Criar <img></img></button>
        </div>
    );
}