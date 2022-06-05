import { Paid } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1e202a" }}>
      <Container>
        <Toolbar
          sx={{ display: "flex", justifyContent: "center", height: "60px" }}
        >
          <Box sx={{ cursor: "pointer", display: "flex" }}>
            <Paid
              sx={{
                mr: "10px",
              }}
            />
            <Typography>Поддержите проект</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
