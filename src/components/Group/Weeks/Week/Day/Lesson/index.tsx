import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ILesson } from "../../../../../../interfaces/lesson.interface";

interface ILessonProps {
  lesson: ILesson;
}

const Lesson: FC<ILessonProps> = ({ lesson }) => {
  return (
    <Box
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
  );
};

export default Lesson;
