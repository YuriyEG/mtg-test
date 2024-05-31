import type { State } from "../../app/store"
export interface ILangSelector {
  state: State
  toggleActiveSelect: () => void
  setLanguage: (lang: string) => void
}
