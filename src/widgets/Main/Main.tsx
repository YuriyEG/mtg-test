import styles from "./Main.module.css"
import { Component } from "react"
import { useState } from "react"
import { connect } from "react-redux"
import Comment from "../../features/Comment"
import comments from "../../data/comments"

class Main extends Component {
  render() {
    const commentList = Object.entries(comments[this.props.lang]).map(node => {
      return { id: node[0], ...node[1] }
    })
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
}

const mapStateToProps = state => ({ lang: state.lang })

export default connect(mapStateToProps)(Main)
