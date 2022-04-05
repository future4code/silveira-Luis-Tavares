import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CriarUsuario } from "./components/CriarUsuario/CriarUsuario";
import { ListaUsuarios } from "./components/ListaUsuarios/ListaUsuarios";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const TrocarTela = styled.button`
  padding: 0 15px;
  margin-top: 10px;
`

const header = {
  headers: {Authorization: "luis-tavares-silveira"}
}

export class App extends React.Component {
  state = {
    trocarTela: true
  }

  render() {

    return (
      <MainContainer>
        <GlobalStyle />

        {this.state.trocarTela ? 

        <CriarUsuario header={header}/> :

        <div>
         <ListaUsuarios header={header}
         />
        </div>
        }

      <TrocarTela onClick={() => this.setState({trocarTela: !this.state.trocarTela})}>Trocar de Tela</TrocarTela>
        
      </MainContainer>
    );
  }
}

export default App;
