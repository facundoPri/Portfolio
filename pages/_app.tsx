import App, { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppLayout from "components/layout/appLayout";
import { theme } from "components/ui/theme";
import { PrismGlobal } from "components/ui/prism";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <PrismGlobal />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
