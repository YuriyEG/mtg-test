import styles from "./Main.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import { Pagination } from "antd"

import type IMain from "./MainType"
import type { IMainState } from "./MainType"
import type { State } from "../../app/store"

import Comment from "../../features/Comment"
import getComments from "../../helper/getComments"
class Main extends Component<IMain, IMainState> {
  state = { totalPages: 1, chunk: [], comments: [] }

  componentDidMount(): void {
    const { lang } = this.props.state
    const commentList = getComments(lang)
    this.setState({
      ...this.state,
      comments: commentList,
      chunk: commentList.slice(0, 10),
      totalPages: Math.ceil(commentList.length / 10),
    })
  }

  render() {
    const changePage = (page: number) => {
      console.log(page)
      this.setState({
        ...this.state,
        chunk: this.state.comments.slice((page - 1) * 10, (page - 1) * 10 + 10),
      })
    }

    return (
      <div className={styles.main}>
        <Pagination
          pageSize={10}
          size="small"
          total={this.state.comments.length}
          onChange={changePage}
          showSizeChanger={false}
        />
        <ul>
          {this.state.chunk.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({ state })

export default connect(mapStateToProps)(Main)
