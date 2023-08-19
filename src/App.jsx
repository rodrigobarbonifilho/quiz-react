import { Outlet } from "react-router-dom";
import pallet from "./colors.json"
import { ThemeProvider } from "styled-components";
import { GlobalWrapper, GlobalStyle } from "./style";

function App() {
  return (
    <ThemeProvider theme={pallet.light}>
      <GlobalWrapper>
        <GlobalStyle />
        <Outlet />
      </GlobalWrapper>
    </ThemeProvider>
  );
}

export default App
