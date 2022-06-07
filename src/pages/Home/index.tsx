import { Container } from "@mui/material";
import { FC } from "react";
import { Group } from "../../components";

const Home: FC = () => {
  return (
    <Container
      sx={{
        height: "calc(100% - 151px)",
      }}
    >
      <Group />
    </Container>
  );
};

export default Home;
