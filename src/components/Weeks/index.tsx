import { FC, ReactNode, useRef, useState } from "react";
import { IWeek } from "../../interfaces/week.interface";
import Week from "./Week";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box, Button } from "@mui/material";

interface IWeeksProps {
  weeks: IWeek[];
}

const Weeks: FC<IWeeksProps> = ({ weeks }) => {
  const [activeButton, setActiveButton] = useState<boolean>(true);

  const settings: Settings = {
    infinite: false,
    arrows: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    appendDots: appendDots,
  };

  const sliderRef = useRef<any>(null);

  function appendDots(dots: ReactNode[]) {
    return (
      <ul className="week-dots">
        {dots.map((dot, index) => (
          <div key={index}>{dot}</div>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {weeks.map((week) => (
          <Week key={week.id} week={week} />
        ))}
      </Slider>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {appendDots([
          <Button
            variant={activeButton ? "contained" : "outlined"}
            sx={{
              color: "#fff",
              mr: "5px",
              borderColor: "#1e202a",
            }}
            onClick={() => {
              sliderRef.current.slickPrev();
              setActiveButton(true);
            }}
          >
            Четная
          </Button>,
          <Button
            variant={activeButton ? "outlined" : "contained"}
            sx={{
              color: "#fff",
              borderColor: "#1e202a",
            }}
            onClick={() => {
              sliderRef.current.slickNext();
              setActiveButton(false);
            }}
          >
            Нечетная
          </Button>,
        ])}
      </Box>
    </div>
  );
};

export default Weeks;
