import { FC, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StepContextProvider } from "./contexts/StepContext";
import AppRoutes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
const App: FC = () => {
  return (
    <Router>
      <StepContextProvider>
        <AppRoutes />
        <GlobalStyles />
      </StepContextProvider>
    </Router>
  );
};

export default App;
