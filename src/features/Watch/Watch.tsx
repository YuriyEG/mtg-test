import styles from "./Watch.module.css"
import { Component } from "react"

class Watch extends Component {
  constructor(props) {
    super(props)

    this.state = { time: 0, id: null }
  }

  componentDidMount(): void {
    const id = setInterval(() => {
      const getCurrentTime = () => {
        return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
      }
      const newTime = getCurrentTime()
      this.setState({ time: newTime })
    }, 1000)
    this.setState({ ...this.state, id })
  }

  componentWillUnmount(): void {
    clearInterval(this.state.id)
  }

  render() {
    return <div className={styles.watch}>{this.state.time}</div>
  }
}

export default Watch
