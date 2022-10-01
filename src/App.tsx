import { Header } from "./Components";
import { ThemeProvider, Button, Card, Badge } from "theme-ui";
import { theme } from "./theme";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </>
  );
};

export default App;
