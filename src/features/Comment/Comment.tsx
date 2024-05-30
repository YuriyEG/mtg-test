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
        <h3 className={styles.comment__name}>
          <span>{shortName} </span>
        </h3>
        <p className={styles.comment__review}>{review}</p>
        <p className={styles.comment__date}>{date}</p>
      </li>
    )
  }
}

export default Comment
