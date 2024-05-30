import styles from "./LangSelect.module.css"
import { Component } from "react"
import { connect } from "react-redux"

class LangSelect extends Component {
  constructor(props) {
    super(props)
    this.state = { state: false, open: false, lang: "ru" }
  }

  languageHandler = e => {
    this.props.toggleActiveSelect()
    if (e.target.id) this.props.setLanguage(e.target.id)
  }

  render() {
    return (
      <div className={styles.select} onClick={this.languageHandler}>
        <p className={styles.select__lang}>{this.props.lang}</p>
        {this.props.openSelect && (
          <ul name="lang">
            <li value="ru" id="ru" className={styles.select__option}>
              ru
            </li>
            <li value="en" id="en" className={styles.select__option}>
              en
            </li>
          </ul>
        )}
      </div>
    )
  }
}

const setLang = payload => ({ type: "LANG", payload })
const toggleSelect = () => ({ type: "TGSEL" })

const mapStateToProps = state => {
  return { lang: state.lang, openSelect: state.openSelect }
}
const mapDispatchToProps = dispatch => {
  return {
    setLanguage: (lang: string) => {
      dispatch(setLang(lang))
    },
    toggleActiveSelect: () => dispatch(toggleSelect()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect)
