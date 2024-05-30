import { Tuple, configureStore } from "@reduxjs/toolkit"
import { Lang } from "../helper/getComments"

export interface State {
  lang: Lang
  openSelect: boolean
}

const initialState: State = { lang: Lang.ru, openSelect: false }

type Action = {
  type: string
  payload: string
}

const reducer = (state: State = initialState, action: Action) => {
  if (action.type === "TGSEL") {
    return { ...state, openSelect: !state.openSelect }
  }
  if (action.type === "LANG") {
    return { ...state, lang: action.payload }
  }
  return state
}

const store = configureStore({
  reducer,
  middleware: () => new Tuple(),
})

export default store
