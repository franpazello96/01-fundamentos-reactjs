import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css'
import './global.css'

//author  {avatar_url:"", name:"", role:""}
//publishedAt: Date
//content: String

const posts = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/franpazello96.png', 
      name:'Francielly Pazello', 
      role:'Developer'
      }, 
      content: [
            {
            type: 'paragraph', 
            content: 'conteudo do post', 
            
            },
            {
               type: 'paragraph', 
               content: 'continuação do conteudo do post'
            },
            {
               type: 'paragraph', 
               content: 'segunda parte do conteudo do post'
            },
         ], 
      publishedAt: new Date('2025-01-25 20:13:12'),
   },

   {
      id: 2,
      author: {
         avatarUrl: 'https://github.com/carlospepato.png', 
      name:'Carlos Pepato', 
      role:'Educator'
      }, 
      content: [
            {
            type: 'paragraph', 
            content: 'It was the release of Letraset sheets.', 
            },
            {
               type: 'paragraph', 
               content: 'It was Letraset sheets.'
            },
            {
               type: 'paragraph', 
               content: 'It was popularised in the 1960s.'
            },
         ], 
      publishedAt: new Date('2025-01-27 20:41:05'),
   },
]

export function App() {
   return (
      <div>
         <Header />
            <div className={styles.wrapper}>
               <Sidebar />
               <main>
                 {posts.map (post => {
                  return(
                  <Post
                     key={post.id}
                     author={post.author}
                     content={post.content}
                     publishedAt={post.publishedAt}
                  />)
                 })}
               </main>
            </div>
      </div>
   )
}

export default App
