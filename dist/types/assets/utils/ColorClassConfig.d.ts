declare type Color = 'primary' | 'orange' | 'black' | 'purple' | 'azure' | 'white' | 'background-color' | 'green' | 'red';
declare type Brightness = '900' | '500' | '100' | '50';
declare type Class = 'bgColor' | 'borderColor' | 'textColor';
declare type IBrightness = {
    900: string;
    500?: string;
    100?: string;
    50?: string;
};
declare type IClass = Record<Class, IBrightness>;
declare type IColors = Record<Color, IClass>;
declare const color: IColors;
export { color, Color, Brightness, Class };
