import styles from "./Main.module.css"
import { useState } from "react"
import Comment from "../../features/Comment"
import comments from "../../data/comments"

const Main = () => {
  const [lang, setLang] = useState("ru")
  const commentList = Object.entries(comments[lang]).map(node => {
    return { id: node[0], ...node[1] }
  })

  console.log(commentList)

  return (
    <div className={styles.main}>
      <ul>
        {commentList.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  )
}

export default Main
