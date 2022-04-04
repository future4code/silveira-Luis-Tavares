import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import EtapaFinal from "./components/EtapaFinal";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Botao = styled.button`
  padding: 3px 8px;
`

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
   }
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />

      case 2:
        return <Etapa2 />

      case 3:
        return <Etapa3 />

      case 4:
        return <EtapaFinal />

       default:
        return 'ErroR!'
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1});
  }

  render() {
    return (
      <MainContainer>
        <GlobalStyle />

        {this.renderizaEtapa()}
       {this.state.etapa != 4 ? <Botao onClick={this.irParaProximaEtapa}>Próxima Etapa</Botao> : ""}
          

      </MainContainer>
    );
  }
}

export default App;
