import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  backgroundColor: "#ffffff",
  border: "2px solid #4e30e6",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b3e5fc",
      contrastText: "#ffffff",
    },
    background: {
      main: "#FBFCF7",
      contrastText: "#000000",
    },
  },
  fonts: {
    main: {
      weight: "800",
      size: "20px",
      family: "Concert One",
    },
    secondary: {
      size: "16px",
      family: "Barlow",
    },
    mobile: {
      size: "12px",
      family: "Arial",
    },
  },
};

export const nightMode: DefaultTheme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    common: {
      ...defaultTheme.palette.common,
      black: "#000000",
    },
    primary: {
      main: "#FBFCF7",
      contrastText: "#ffffff",
    },
    background: {
      main: "#404040",
      contrastText: "#FBFCF7",
    },
  },
  fonts: {
    ...defaultTheme.fonts,
    main: {
      weight: "500",
      size: "20px",
      family: "Concert One",
    },
  },
};
