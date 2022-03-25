import React from "react";
import styled from "styled-components";
import { InputsMensagem } from "./components/InputsMensagem/InputsMensagem";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 32vw;
  height: 100vh;
  border: 1px solid black;
  margin: auto;
`

function App() {
  return (
    <MainContainer className="App">
      <InputsMensagem />
    </MainContainer>
  );
}

export default App;
