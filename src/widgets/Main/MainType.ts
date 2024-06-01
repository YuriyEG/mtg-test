import type { State } from "../../app/store"
import type { IComment } from "../../helper/getComments"

interface IMain {
  state: State
}

export interface IMainState {
  totalPages: number
  chunk: IComment[]
  comments: IComment[]
}

export default IMain
