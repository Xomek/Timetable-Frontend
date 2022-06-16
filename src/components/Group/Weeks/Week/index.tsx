import { FC } from "react";
import { IWeek } from "../../../../interfaces/week.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Day from "./Day";

interface IWeekProps {
  week: IWeek;
}

const Week: FC<IWeekProps> = ({ week }) => {
  const settings: Settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {week.days.map((day) => (
          <Day day={day} />
        ))}
      </Slider>
    </>
  );
};

export default Week;
