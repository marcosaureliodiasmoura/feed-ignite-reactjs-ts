import './global.css';
import styles from './App.module.css';

import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/8454273?v=4',
      name: 'Marcos Moura',
      role: 'CTO Returnal'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2022-08-08 06:20:06'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/8454273?v=4',
      name: 'Paulo Barros',
      role: 'Tech Lead @Vuhex'
    },
    content: [
      { type: 'paragraph', content: 'Fala players 👋', },
      { type: 'paragraph', content: 'Sou monstro xxxxxxxx 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2022-08-20 06:20:06'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
           return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
           )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
