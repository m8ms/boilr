import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import { FC } from "react";
import usePreferedColorScheme from "../theme/usePreferedColorScheme";
import GlobalStyles from "../components/styled-common/GlobalStyles";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const theme = usePreferedColorScheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
