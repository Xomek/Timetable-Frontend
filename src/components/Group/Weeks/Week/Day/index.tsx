import { FC } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Card, styled, Theme } from "@mui/material";
import { IDay } from "../../../../../interfaces/day.interface";
import Lesson from "./Lesson";

interface IDayProps {
  day: IDay;
}

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

const Day: FC<IDayProps> = ({ day }) => {
  return (
    <CardStyled sx={{ cursor: "pointer" }}>
      <CardHeader
        sx={{ textAlign: "center", color: "#2d333b" }}
        title={day.title}
      />
      <CardContent>
        {day.lessons.map((lesson) => (
          <Lesson key={lesson.id} lesson={lesson} />
        ))}
      </CardContent>
    </CardStyled>
  );
};

export default Day;
