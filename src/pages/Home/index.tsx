import { Container } from "@mui/material";
import { FC } from "react";
import { Group } from "../../components";

const Home: FC = () => {
  return (
    <Container
      sx={{
        height: "calc(100vh - 220px)",
      }}
    >
      <Group />
    </Container>
  );
};

export default Home;
