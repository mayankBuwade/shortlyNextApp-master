import Layout from "../components/Layout";
import { Container, GlobalStyle } from "../styles/styles";
import theme from "../colors/theme";
import { ThemeProvider } from "styled-components";
import '../imageHover.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
