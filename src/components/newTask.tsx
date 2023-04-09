import styles from './newTask.module.css'
import Plus from '../assets/plus.svg';

export function Tasks() {


    return (

        <div className={styles.newTask}>
            <input className={styles.taskInput} placeholder='Adicione uma nova tarefa'></input>
            <button type="submit">Criar <img src={Plus}></img></button>
        </div>

    );
}