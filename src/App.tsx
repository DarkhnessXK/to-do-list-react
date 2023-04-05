import { Header } from './components/header'
import { Tasks } from './components/new-task'
//import { Post } from './components/Post.jsx';

import './App.module.css'
import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <main>
        <Tasks />

      </main>

    </div>

  )
}
