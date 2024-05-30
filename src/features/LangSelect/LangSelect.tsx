import styles from "./LangSelect.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import { Lang } from "../../helper/getComments"
import type { ILangSelector } from "./LangSelectorType"
import type { State } from "../../app/store"
import type { Dispatch } from "@reduxjs/toolkit"

class LangSelect extends Component<ILangSelector> {
  languageHandler = e => {
    this.props.toggleActiveSelect()
    if (e.target.id === "ru") this.props.setLanguage(Lang.ru)
    if (e.target.id === "en") this.props.setLanguage(Lang.en)
  }

  render() {
    return (
      <div className={styles.select} onClick={this.languageHandler}>
        <p className={styles.select__lang}>{this.props.state.lang}</p>
        {this.props.state.openSelect && (
          <ul>
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

const setLang = (payload: Lang) => ({ type: "LANG", payload })
const toggleSelect = () => ({ type: "TGSEL" })

const mapStateToProps = (state: State) => {
  return { state }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLanguage: (lang: Lang) => {
      dispatch(setLang(lang))
    },
    toggleActiveSelect: () => dispatch(toggleSelect()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect)
