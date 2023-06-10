import React from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../src/styles/reset.css";
import "../src/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const queryClient = new QueryClient();
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
