import { IWeek } from "./week.interface";

export interface IGroup {
  id: string;
  title: string;
  headmanId: string;
  weeks: IWeek[];
}
