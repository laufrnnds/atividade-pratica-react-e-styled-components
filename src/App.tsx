import React from "react";
import AppRoutes from "../src/routes/AppRouter";
import GlobalStyle from "../src/config/GlobalStyle";
import { ThemeProvider } from "styled-components";

const temas = {
  dark: {
    color: "#b9bdbd",
    backgroundColor: "#4e2e06",
    primary: "#79aa9d",
    secondary: "#402C1B",
  },
  light: {
    color: "#402C1B",
    backgroundColor: "#D7D9D9",
    primary: "#BF7F30",
    secondary: "#A4BFB8",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={temas.light}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
