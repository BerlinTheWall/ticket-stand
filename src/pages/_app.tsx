import { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../helper/create-emotion-cache";
import AppState from "@/context/AppState";
import MUIThemeProvider from "@/utils/mui-theme-provider";
import "../styles/globals.css";
import "swiper/css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lightTheme } from "@/mui/theme";
import "react-toastify/dist/ReactToastify.css";
import Toast from "@/components/toast";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 10 seconds
            staleTime: 10 * 1000,
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            retry: 1,
            retryDelay: 1.5 * 1000,
            networkMode: "always",
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppState>
          <CacheProvider value={emotionCache}>
            <Head>
              <title>Ticket Stand</title>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
              <meta name="color-scheme" content="dark light" />
            </Head>

            <MUIThemeProvider>
              <NextNProgress
                height={4}
                color={lightTheme.palette.primary.main}
                showOnShallow={true}
                startPosition={0.3}
              />
              {Component.PageLayout ? (
                <Component.PageLayout>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Component {...pageProps} />
              )}
              <Toast />
            </MUIThemeProvider>
          </CacheProvider>
        </AppState>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
