import styles from './Post.module.css'
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post() {
  return(
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
          <Avatar src="https://github.com/franpazello96.png"/>
              <div className={styles.authorInfo}>
                  <strong>Francielly Pazello</strong>
                  <span>Developer</span>
              </div>
          </div>
          <time title="25 de Janeiro de 2025 às 20:13" dateTime='2025-01-25 20:13:12' >
            Publicado há 1 hora
          </time>
        </header>
        <div className={styles.content} >
          <p>
            It was popularised in the 1960s with the release of Letraset 
            sheets.
          </p>

          <p> 
            <a href="#">
            It was popularised sheets containing.
            </a>
          </p>

          <p>
            It was popularised in the 1960s
          </p>

        </div>

        <form className={styles.commentForm}> 
          <strong>Deixe seu FeedBack</strong>
          <textarea placeholder="Comente aqui" />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
    </article>
  )
}