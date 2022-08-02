import styled, { createGlobalStyle } from "styled-components";

import { Router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
      <main>
        <Router />
        <GlobalStyle />
      </main>
  )
}

export default App;