import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const theme = extendTheme({ colors });

const TopProgressBar = dynamic(
  () => {
    return import("../components/top-progressbar");
  },
  { ssr: false }
);

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <TopProgressBar />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

export default MyApp;
