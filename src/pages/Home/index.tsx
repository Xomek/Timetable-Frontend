import { Container } from "@mui/material";
import { FC } from "react";
import { Group } from "../../components";

const Home: FC = () => {
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - (84.8px + 64px))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Group />
    </Container>
  );
};

export default Home;
