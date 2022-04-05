import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { defaultTheme, nightMode } from "../themes/theme";
import { Provider, useSelector } from "react-redux";
import store from "../store/store";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }: AppProps) {
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? defaultTheme : nightMode;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
