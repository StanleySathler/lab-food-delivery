import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "../contexts/CartContext";
import CartContainer from "../components/CartContainer";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FooDelivery - Food Delivery App</title>
        <meta name="description" content="Order delicious food from your favorite restaurants with fast delivery." />
        <meta property="og:title" content="FooDelivery - Food Delivery App" />
        <meta property="og:description" content="Order delicious food from your favorite restaurants with fast delivery." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://lab-food-delivery.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />

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
