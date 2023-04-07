import { Header } from './components/header'
import { Tasks } from './components/newTask'
import { TaskList } from './components/taskList'
import { TaskPost } from './components/taskPost'

import styles from './App.module.css'
import './global.css'


export function App() {

  return (
    <div>
      
      <Header />

      <main>
        <Tasks />
        <TaskList />
        <TaskPost />

      </main>

    </div>

  )
}
