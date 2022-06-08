import { FC } from "react";
import { IWeek } from "../../../interfaces/week.interface";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { styled, Typography, Theme } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

const CardStyled = styled(Card)(({ theme }: { theme: Theme }) => ({
  maxHeight: 460,
  height: "100%",
  color: "#fff",
  backgroundColor: "#e4e6e7",
  overflowY: "auto",
  "::-webkit-scrollbar": { display: "none" },
  [theme.breakpoints.down("sm")]: {
    maxHeight: 360,
  },
}));

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
          <CardStyled key={day.id}>
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
          </CardStyled>
        ))}
      </Slider>
    </>
  );
};

export default Week;
