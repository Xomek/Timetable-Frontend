import { EDayNames } from "../interfaces/day.interface";
import { ELessonType } from "../interfaces/lesson.interface";

const MOCK_GROUP = {
  id: "12",
  headmanId: "32",
  title: "Э-02",
  weeks: [
    {
      id: "2",
      days: [
        {
          id: "123",
          title: EDayNames.MONDAY,
          lessons: [
            {
              id: "as1",
              type: ELessonType.PZ,
              title: "Физкультура",
              teacher: "Попов Дмитрий Генадьевич",
              cabinetNumber: "404",
              startDate: "08:30",
              endDate: "10:05",
              order: 1,
            },
          ],
        },
        {
          id: "12345",
          title: EDayNames.TEUSDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "12364",
          title: EDayNames.WEDNESDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "233",
          title: EDayNames.THURSDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "2sda",
          title: EDayNames.FRIDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "13123s",
          title: EDayNames.SATURDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "fdghjrt",
          title: EDayNames.SUNDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
      ],
      isEven: true,
    },
    {
      id: "2",
      days: [
        {
          id: "123",
          title: EDayNames.MONDAY,
          lessons: [
            {
              id: "as1",
              type: ELessonType.PZ,
              title: "География",
              teacher: "Попов Дмитрий Генадьевич",
              cabinetNumber: "404",
              startDate: "08:30",
              endDate: "10:05",
              order: 1,
            },
            {
              id: "aфыs1",
              type: ELessonType.LK,
              title: "География",
              teacher: "Попов Дмитрий Генадьевич",
              cabinetNumber: "404",
              startDate: "08:30",
              endDate: "10:05",
              order: 1,
            },
            {
              id: "asай1",
              type: ELessonType.LB,
              title: "География",
              teacher: "Попов Дмитрий Генадьевич",
              cabinetNumber: "404",
              startDate: "08:30",
              endDate: "10:05",
              order: 1,
            },
          ],
        },
        {
          id: "12345",
          title: EDayNames.TEUSDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "12364",
          title: EDayNames.WEDNESDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "233",
          title: EDayNames.THURSDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "2sda",
          title: EDayNames.FRIDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "13123s",
          title: EDayNames.SATURDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
        {
          id: "fdghjrt",
          title: EDayNames.SUNDAY,
          lessons: [
            {
              id: "as121",
              type: ELessonType.LK,
              title: "Математика",
              teacher: "Кузьменко Елена Викторовна",
              cabinetNumber: "302",
              startDate: "10:05",
              endDate: "12:00",
              order: 1,
            },
          ],
        },
      ],
      isEven: true,
    },
  ],
};

export default MOCK_GROUP;
