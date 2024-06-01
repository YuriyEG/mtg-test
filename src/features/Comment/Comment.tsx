import styles from "./Comment.module.css"

import type ICommentComponent from "../../types/CommentType"

import { Component } from "react"

import getShortName from "../../helper/getShortName"

class Comment extends Component<ICommentComponent> {
  render() {
    const { name, review, date } = this.props.comment

    const shortName = getShortName(name)

    return (
      <li className={styles.comment}>
        <blockquote>
          <p className={styles.comment__review}>{review}</p>
          <cite className={styles.comment__name}>{shortName}</cite>
          <time className={styles.comment__date}>{date}</time>
        </blockquote>
      </li>
    )
  }
}

export default Comment
