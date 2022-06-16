import { FC } from "react";
import { IWeek } from "../../../../interfaces/week.interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Day from "./Day";
import { styled } from "@mui/material";

interface IWeekProps {
  week: IWeek;
}

const SliderStyled = styled(Slider)({});

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
    <Slider className="slider-day" {...settings}>
      {week.days.map((day) => (
        <Day key={day.id} day={day} />
      ))}
    </Slider>
  );
};

export default Week;
