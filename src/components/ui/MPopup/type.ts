type TOffsetStyle = {
  [key in string]: string|undefined
}
type TOffsetProps = {
  top?: number
  left?: number
  right?: number
  bottom?: number
  x?: string
  y?: string
}

type TTargetData = {
  x: number
  y: number
  width: number
  height: number
}

export {
  TOffsetStyle,
  TTargetData,
  TOffsetProps
}