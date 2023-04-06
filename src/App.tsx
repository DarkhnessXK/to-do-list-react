import { Header } from './components/header'
import { Tasks } from './components/newTask'
import { TaskList } from './components/taskList'

import styles from './App.module.css'
import './global.css'


export function App() {

  return (
    <div>
      
      <Header />

      <main>
        <Tasks />
        <TaskList />

      </main>

    </div>

  )
}
