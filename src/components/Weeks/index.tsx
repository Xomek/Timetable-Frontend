import { FC } from "react";
import { IWeek } from "../../interfaces/week.interface";

interface IWeeksProps {
  weeks: IWeek[];
}

const Weeks: FC<IWeeksProps> = ({ weeks }) => {
  return <div></div>;
};

export default Weeks;
