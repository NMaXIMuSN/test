interface IHeader {
  name: string
  value: string
  maxWidth?: string
  sortable?: boolean
  ellipsis?: boolean
}

type Item = Record<string, HTMLElement>

export {
  IHeader,
  Item
}