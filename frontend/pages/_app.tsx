import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    if (typeof window !== 'undefined') {
      import('../src/mocks/browser').then(({ worker }) => {
        worker.start();
      });
    }
  }, []);

  return (
    <>
      <Head>
        {/* TODO: Don't use CDN but a PostCSS alternative. */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
