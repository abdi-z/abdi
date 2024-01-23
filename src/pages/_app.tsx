import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

import PageContainer from "../components/PageContainer";
import theme from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Abdul Rehman Aziz -- Software Engineer"
        description="A comp sci fanatic, software engineer and a ML-enthusiast."
      />

      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ChakraProvider>
  );
};

export default App;
