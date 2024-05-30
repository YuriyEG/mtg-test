import type { State } from "../../app/store"
import type { Lang } from "../../helper/getComments"

export interface ILangSelector {
  state: State
  toggleActiveSelect: () => void
  setLanguage: (lang: Lang) => void
}
