import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

const theme = extendTheme({ colors });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}

export default MyApp;
