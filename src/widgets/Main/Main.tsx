import styles from "./Main.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import type IMain from "./MainTypes"
import type { State } from "../../app/store"

import Comment from "../../features/Comment"
import getComments from "../../helper/getComments"

class Main extends Component<IMain> {
  render() {
    const { lang } = this.props.state
    const commentList = getComments(lang)
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

const mapStateToProps = (state: State) => ({ state })

export default connect(mapStateToProps)(Main)
