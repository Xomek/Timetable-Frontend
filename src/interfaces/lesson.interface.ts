export enum ELessonType {
  PZ = "ПЗ",
  LK = "ЛК",
  LB = "ЛБ",
}

export interface ILesson {
  id: string;
  title: string;
  type: ELessonType;
  teacher: string;
  cabinetNumber: string;
  startDate: string;
  endDate: string;
  order: number;
}
