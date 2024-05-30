import { Tuple, configureStore } from "@reduxjs/toolkit"

const initialState = { lang: "ru", openSelect: false }

type Action = {
  type: string
  payload: string
}

const reducer = (state = initialState, action: Action) => {
  console.log(state)
  console.log(action)
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
