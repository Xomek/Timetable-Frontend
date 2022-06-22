export const globalStyles: any = {
  body: {
    fontFamily: "sans-serif",
  },

  a: {
    textDecoration: "none",
  },

  "#root": {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  ".slider-day": {
    margin: "20px 0",
    ".slick-track": {
      padding: "70px 0",
    },

    "div > .slick-slide": {
      width: 400,
      transition: "all 0.4s",
      "> div": {
        height: 460,
        margin: "0 20px",
      },
    },

    ".slick-list": {
      margin: " 0 -20px",
    },

    ".slick-center": {
      transition: "all 0.5s",
      transform: "scale(1.3)",
      " > div": {
        boxShadow: "0px 0px 40px #2d333b",
      },
    },
  },

  ".week-dots": {
    position: "absolute",
    bottom: "9%",
    display: "flex",
    padding: 0,
  },

  ["@media (max-width: 400px)"]: {
    ".slider-day:": {
      ".slick-track:": {
        padding: 0,
      },
    },

    "div > .slick-slide": {
      "> div": {
        height: 300,
      },
    },
  },
};
