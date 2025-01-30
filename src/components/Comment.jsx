import styles from './Comment.module.css'; 
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
    
export function Comment({content}) {
    return (
      <div className={styles.comment}>
         <Avatar 
         hasBorder={false}
         src="https://github.com/franpazello96.png"
         />
         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Francielly Pazello</strong>
                     <time title='26 de janeiro de 2025'
                     dateTime='2025-01-26 20:00'>
                        Cerca de 1 hora atrás
                     </time>
                  </div>
                  <button title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
               </button>
            </footer>
         </div>
      </div>
   );
}