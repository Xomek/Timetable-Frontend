import { FC, useEffect, useRef } from "react";
import { IWeek } from "../../../../interfaces/week.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Day from "./Day";
import { getDay } from "../../../../helpers/getDay";

interface IWeekProps {
  week: IWeek;
}

const Week: FC<IWeekProps> = ({ week }) => {
  const sliderRef = useRef<any>(null);
  const dayNow = getDay();

  const settings: Settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: false,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    initialSlide: dayNow,
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
    <Slider ref={sliderRef} className="slider-day" {...settings}>
      {week.days.map((day) => (
        <Day key={day.id} day={day} />
      ))}
    </Slider>
  );
};

export default Week;
