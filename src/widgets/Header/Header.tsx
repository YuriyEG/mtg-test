import styles from "./Header.module.css"
import product from "../../assets/images/product.jpg"
import Watch from "../../features/Watch"
import LangSelect from "../../features/LangSelect"
import { Component } from "react"

class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <img src={product} alt="product" className={styles.image} />
        <Watch />
        <LangSelect />
      </div>
    )
  }
}

export default Header
