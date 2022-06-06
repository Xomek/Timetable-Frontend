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
    <>
      <Slider {...settings}>
        {week.days.map((day) => (
          <Card
            key={day.id}
            sx={{
              height: "500px",
              color: "#fff",
              backgroundColor: "#e4e6e7",
              overflowY: "auto",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <CardHeader
              sx={{ textAlign: "center", color: "#2d333b" }}
              title={day.title}
            />
            <CardContent>
              {day.lessons.map((lesson) => (
                <Box
                  key={lesson.id}
                  sx={{
                    backgroundColor: "#2d333b",
                    padding: "20px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{lesson.title}</Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "700",
                      }}
                    >
                      {lesson.type}
                    </Typography>
                  </Box>

                  <Typography sx={{ fontSize: "13px", mb: "10px" }}>
                    {lesson.teacher}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        fontSize: "12px",
                      }}
                    >
                      <Typography sx={{ pr: "3px", fontSize: "12px" }}>
                        {lesson.startDate}
                      </Typography>
                      <span>-</span>
                      <Typography sx={{ pl: "3px", fontSize: "12px" }}>
                        {lesson.endDate}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "12px" }}>
                      Кабинет {lesson.cabinetNumber}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        ))}
      </Slider>
    </>
  );
};

export default Week;
