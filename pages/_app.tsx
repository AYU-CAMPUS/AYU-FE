import React from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";

import "../styles/reset.css";
import "../styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      {" "}
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
