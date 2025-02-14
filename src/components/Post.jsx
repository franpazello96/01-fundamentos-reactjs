import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(''); 
  // Estado para armazenar o novo comentário
  const publishedDateFormatted = format(publishedAt, "dd LLL yyyy HH:mm", {
    locale: ptBr
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr, 
    addSuffix: true
  })
// Função para criar um novo comentário
  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }
// Função para atualizar o estado do novo comentário
  function handleNewCommmentChange() {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }
  function handleNewCommentInvalid(){
   // console.log(event);
   event.target.setCustomValidity('O comentário não pode ser vazio');
  }
  function deleteComment (commentToDelete){
    //console.log(`deletar comentario ${comment}`);
    const commentsWithoutDeletedOne = comments.filter(commentItem => {
      return commentItem !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

const isNewCommentEmpty = newComment.length === 0; 

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
              return <p key={line.content} >{line.content}</p>
            } else if(line.type === 'link') {
              return <p key={line.content} ><a href="#">{line.content}</a></p>; 
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}> 
          <strong>Deixe seu FeedBack</strong>
            <textarea 
              name="comment" 
              placeholder="Comente aqui" 
              onChange={handleNewCommmentChange} // Adicionando o evento de mudança no textarea
              value={newComment}
              onInvalid={handleNewCommentInvalid} // Adicionando o evento de validação do textarea
              required
            />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty} >
              Publicar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
            <Comment 
            key={content} 
            content={comment} 
            onDeleteComment={deleteComment} 
            />)
          })}
        </div>
    </article>
  )
}