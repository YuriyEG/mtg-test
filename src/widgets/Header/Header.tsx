import styles from "./Header.module.css"
import product from "../../assets/images/product.jpg"
import Watch from "../../features/Watch/Watch"

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={product} alt="product" className={styles.header__image} />
      <Watch />
    </div>
  )
}

export default Header
