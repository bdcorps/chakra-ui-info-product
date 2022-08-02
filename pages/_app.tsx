import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    colors: {
      brand: {
        50: "#5000FF",
        100: "#5000FF",
        200: "#5000FF",
        300: "#5000FF",
        400: "#5000FF",
        500: "#5000FF",
        600: "#5000FF",
        700: "#5000FF",
        800: "#5000FF",
        900: "#5000FF",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
