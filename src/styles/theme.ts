import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1920 },
  },
  palette: {
    primary: {
      main: "#1e202a",
      contrastText: "#fff",
    },
    error: {
      main: "#fe0000",
      contrastText: "#fff",
    },
    background: {
      default: "#2d333b",
    },
  },
});
