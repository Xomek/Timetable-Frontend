import { FC } from "react";
import { IWeek } from "../../../interfaces/week.interface";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

interface IWeekProps {
  week: IWeek;
}

const Week: FC<IWeekProps> = ({ week }) => {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
  };

  return (
    <Slider {...settings}>
      {week.days.map((day) => (
        <Card key={day.id} sx={{ height: "500px" }}>
          <CardHeader sx={{ textAlign: "center" }} title={day.title} />
          <CardContent>
            {day.lessons.map((lesson) => (
              <Box key={lesson.id}>
                <Typography>{lesson.title}</Typography>
                <Typography>{lesson.type}</Typography>
                <Typography>{lesson.teacher}</Typography>
                <Typography>{lesson.cabinetNumber}</Typography>
                <Typography>{lesson.startDate}</Typography>
                <Typography>{lesson.endDate}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default Week;
