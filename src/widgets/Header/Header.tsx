import styles from "./Header.module.css"
import product from "../../assets/images/product.jpg"

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={product} alt="product" className={styles.header__image} />
    </div>
  )
}

export default Header
