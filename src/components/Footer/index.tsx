import { Paid } from "@mui/icons-material";
import { Box, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      position="static"
      sx={{ backgroundColor: "#1e202a", color: "#fff" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "60px",
          }}
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
    </Box>
  );
};

export default Footer;
