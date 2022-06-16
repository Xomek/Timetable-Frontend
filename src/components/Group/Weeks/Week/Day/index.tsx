import { FC } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import { Card, styled, Theme, Typography } from "@mui/material";
import { IDay } from "../../../../../interfaces/day.interface";

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
    <CardStyled key={day.id} sx={{ cursor: "pointer" }}>
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
        ))}
      </CardContent>
    </CardStyled>
  );
};

export default Day;
