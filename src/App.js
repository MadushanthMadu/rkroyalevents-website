import { ThemeProvider } from "@emotion/react";
import Router from "./routes/router";
import { BrowserRouter } from 'react-router-dom';
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
