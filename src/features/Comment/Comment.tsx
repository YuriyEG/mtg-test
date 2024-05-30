import styles from "./Comment.module.css"

import { Component } from "react"

class Comment extends Component {
  render() {
    const { name, review, date } = this.props.comment

    const getShortName = name => {
      const [firstName, secondName] = name.split(" ")
      if (secondName) return `${firstName} ${secondName[0]}.`
      return firstName
    }

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
