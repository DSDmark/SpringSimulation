import React from "react";
import { Header } from "./Components";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
