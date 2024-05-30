import styles from "./Comment.module.css"

import { Component } from "react"

class Comment extends Component {
  render() {
    return (
      <li className={styles.comment}>
        <h3 className={styles.comment__name}>{this.props.comment.name}</h3>
        <p className={styles.comment__review}>{this.props.comment.review}</p>
        <p className={styles.comment__date}>{this.props.comment.date}</p>
      </li>
    )
  }
}

export default Comment
