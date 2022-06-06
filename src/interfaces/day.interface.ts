import { ILesson } from "./lesson.interface";

export enum EDayNames {
  MONDAY = "Понедельник",
  TEUSDAY = "Вторник",
  WEDNESDAY = "Среда",
  THURSDAY = "Четверг",
  FRIDAY = "Пятница",
  SATURDAY = "Суббота",
  SUNDAY = "Воскресенье",
}

export interface IDay {
  id: string;
  title: EDayNames;
  lessons: ILesson[];
}
