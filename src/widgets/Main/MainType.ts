import type { State } from "../../app/store"
interface IMain {
  state: State
}
export interface IMainState {
  page: number
}

export default IMain
