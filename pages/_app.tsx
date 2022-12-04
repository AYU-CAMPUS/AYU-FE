import React, { useState } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { GlobalStyles } from "twin.macro";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
}

export default MyApp;
