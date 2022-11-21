import { Header } from './componentes/Header';
import { Post } from './componentes/Post';
import { Sidebar } from './componentes/Sidebar';



import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Beatrice-mathey.png',
      name: 'Beatrice Mathey',
      role: 'Dev frontend',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2022-11-07 16:45:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lanasoliv.png',
      name: 'Halana Oliveira',
      role: 'DBA',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
    
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    
      {type: 'link', content: 'jane.design/doctorcare'}, 
    ],
    publishedAt: new Date('2022-11-07 16:45:00'),
      },
    ];


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar />
      <main> 
        {posts.map(post => {
          return (
            <Post
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

