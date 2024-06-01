import styles from "./LangSelect.module.css"
import { Component } from "react"
import { connect } from "react-redux"

import type { ILangSelector } from "./LangSelectType"
import type { State } from "../../app/store"
import type { Dispatch } from "@reduxjs/toolkit"

import { toggleSelect } from "../../app/actions"
import { setLang } from "../../app/actions"

class LangSelect extends Component<ILangSelector> {
  languageHandler = e => {
    this.props.toggleActiveSelect()
    if (e.target.id) this.props.setLanguage(e.target.id)
  }

  render() {
    return (
      <div className={styles.select} onClick={this.languageHandler}>
        <div
          className={
            this.props.state.openSelect
              ? styles.select__active
              : styles.select__base
          }
        >
          <p
            className={
              this.props.state.openSelect
                ? styles["select__lang-unactive"]
                : styles.select__lang
            }
          >
            {this.props.state.lang}
          </p>
          <ul>
            <li value="ru" id="ru" className={styles.select__option}>
              ru
            </li>
            <li value="en" id="en" className={styles.select__option}>
              en
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return { state }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLanguage: (lang: string) => {
      dispatch(setLang(lang))
    },
    toggleActiveSelect: () => dispatch(toggleSelect()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect)
