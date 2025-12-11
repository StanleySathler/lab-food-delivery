import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "../src/contexts/CartContext";
import CartContainer from "../src/components/CartContainer";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: Don't use CDN but a PostCSS alternative. */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Component {...pageProps} />
          <CartContainer />
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
