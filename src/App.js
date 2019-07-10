import * as React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./libs";
import Dashboard from "./dashboard";
import GlobalState from './context/GlobalState';

const App = () => (
  // Styled-components theme.
  <ThemeProvider theme={theme}>
    <GlobalState>
      <Dashboard />
    </GlobalState>
  </ThemeProvider>
);

export default App;
