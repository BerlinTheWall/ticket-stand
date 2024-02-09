import { useEffect, useState } from "react";
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

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppState>
          <CacheProvider value={emotionCache}>
            <Head>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
              <meta name="color-scheme" content="dark light" />
              <link rel="shortcut icon" href="/favicon.ico" />
              <meta name="emotion-insertion-point" content="" />
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
              />

              <meta name="pwa-demo" content="pwa-demo" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
              />
              <meta name="apple-mobile-web-app-title" content="pwa-demo" />
              <meta name="description" content="pwa-demo" />
              <meta name="format-detection" content="telephone=no" />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta name="msapplication-TileColor" content="#00925D" />
              <meta name="msapplication-tap-highlight" content="no" />
              <meta name="theme-color" content="#00925D" />

              <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="shortcut icon" href="/favicon.ico" />
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
