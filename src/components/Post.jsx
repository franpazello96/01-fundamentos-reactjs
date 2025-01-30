import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([
  "Postagem incrível!",
  ]);

  const [newComment, setNewComment] = useState('');
  
  const publishedDateFormatted = format(publishedAt, "dd LLL yyyy HH:mm", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr, 
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommmentChange() {
    setNewComment(event.target.value);

  }

  return(
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
              <Avatar src={author.avatarUrl}/>
              <div className={styles.authorInfo}>
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
              </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content} >
          {content.map(line => {
            if(line.type === 'paragraph') {
              return <p>{line.content}</p>
            } else if(line.type === 'link') {
              return <p><a href="#">{line.content}</a></p>; 
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}> 
          <strong>Deixe seu FeedBack</strong>

          <textarea 
          name="comment" 
          placeholder="Comente aqui" 
          onChange={handleNewCommmentChange} 
          value={newComment}
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment content={comment} />
          })}
        </div>
    </article>
  )
}