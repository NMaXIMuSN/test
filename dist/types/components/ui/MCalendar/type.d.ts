interface IDataValue {
    startDate: Date;
    finishDate: Date;
}
interface ICurrentDate {
    mouthNow: number;
    yaerNow: number;
}
declare type ModelValue = {
    title: string;
    value: string;
    isDate?: boolean;
};
export type { ModelValue, IDataValue, ICurrentDate };
