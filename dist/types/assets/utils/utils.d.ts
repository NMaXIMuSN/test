import { Color, Brightness, Class } from "./ColorClassConfig";
declare function colorClass(currentColor: Color, defaultColor: Color, brightness: Brightness, defaultBrightness: Brightness, typeClass: Class): string | undefined;
declare function prettierNumeric(format: string, formatSymbol: symbol, item: string | number): string;
export { colorClass, prettierNumeric };
