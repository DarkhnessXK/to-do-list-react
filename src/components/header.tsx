import styles from './header.module.css'

import Todologo from '../assets/Todo-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Todologo} alt="Logotipo do To-do-list" />
        </header>
    );
}