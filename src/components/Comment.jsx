import styles from './Comment.module.css'; 
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';



export function Comment({content, onDeleteComment}) {

   const [likeCont, setLikeCount] = useState(0);

   function handleDeleteComment(){
      //console.log('Deletar comentário');
      onDeleteComment(content);
   }

   function handleLikeComment() {
      setLikeCount((state) => {return likeCont + 1 });
   }

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
                  <button onClick={handleDeleteComment} title='Deletar comentário'>
                     <Trash size={24} />
                  </button>
               </header>
               <p>{content}</p>
            </div>
            <footer>
               <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCont}</span>
               </button>
            </footer>
         </div>
      </div>
   );
}