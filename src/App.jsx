import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/davesvieira.png',
      name: 'Daves S. Vieira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hello Guys',},
      { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',},
      { type: 'link', content: 'diego.fernandes/frontend'},
    ],
    publishedAt: new Date('2022-06-13 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/davesvieira.png',
      name: 'Neliane S. Vieira',
      role: 'Contadora'
    },
    content: [
      { type: 'paragraph', content: 'Hello Guys 2',},
      { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s 2',},
      { type: 'link', content: 'diego.fernandes/frontend2'},
    ],
    publishedAt: new Date('2022-06-15 15:30:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
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
