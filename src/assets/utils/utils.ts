import { Color, Brightness, Class } from "./ColorClassConfig"
import { color } from "./ColorClassConfig"

function colorClass(currentColor: Color, defaultColor: Color, brightness: Brightness, defaultBrightness: Brightness, typeClass: Class): string|undefined {
  const colorName: Color = color[currentColor]
    ? currentColor
    : defaultColor
	
  const brightnessName = color[colorName][typeClass][brightness]
    ? brightness
    : defaultBrightness

  return color[colorName][typeClass][brightnessName]
}


function prettierNumeric(format: string, formatSymbol: symbol, item: string|number ): string {
  let stringItem = String(item)
  const countSymbolFormat = format.length  

  if (stringItem.length < countSymbolFormat) {
    const test = Array(countSymbolFormat - stringItem.length).fill(formatSymbol).join('')
    stringItem = test + stringItem
  }
	
  return stringItem
}


export {
  colorClass,
  prettierNumeric
}