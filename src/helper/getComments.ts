import comments from "../app/mockData/comments"

export interface IComment {
  id: string
  name: string
  review: string
  date: string
}
export enum Lang {
  ru = "ru",
  en = "en",
}

const getComments: (lang: Lang) => IComment[] = lang => {
  const entries = Object.entries(comments[lang])
  return entries.map(node => ({ id: node[0], ...node[1] }))
}

export default getComments
