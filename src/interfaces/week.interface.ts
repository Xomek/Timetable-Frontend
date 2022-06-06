import { IDay } from "./day.interface";

export interface IWeek {
  id: string;
  isEven: boolean;
  days: IDay[];
}
