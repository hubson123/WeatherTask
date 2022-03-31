import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  backgroundColor: "#ffffff",
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
      main: "#709fb0",
      contrastText: "#ffffff",
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
  },
};
