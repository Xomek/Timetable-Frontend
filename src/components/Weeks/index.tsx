import { FC } from "react";
import { IWeek } from "../../interfaces/week.interface";
import Week from "./Week";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Container } from "@mui/system";

interface IWeeksProps {
  weeks: IWeek[];
}

const Weeks: FC<IWeeksProps> = ({ weeks }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        {weeks.map((week) => (
          <Week key={week.id} week={week} />
        ))}
      </Slider>
    </Container>
  );
};

export default Weeks;
