import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
