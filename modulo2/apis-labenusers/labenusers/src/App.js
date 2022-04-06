import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { CriarUsuario } from "./components/CriarUsuario";
import { ListaUsuarios } from "./components/ListaUsuarios";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  margin-top: 20px;
`

export class App extends React.Component {
  state = {
    telaAtual: "criarUser"
  }

  trocarTela = () => {
    switch(this.state.telaAtual) {
      case "criarUser":
        return (
          <CriarUsuario 
          telaListaUsuarios={this.telaListaUsuarios}
          />
        )

      case "listaUsers":
        return (
          <ListaUsuarios 
          telaCriarUsuario={this.telaCriarUsuario}
          telaEditarUsuario={this.telaEditarUsuario}
          />
        )

      default:
        return <div>ERRO! Página não encontrada.</div>
    }
  }

  telaCriarUsuario = () => {
    this.setState({telaAtual: "criarUser"});
  }

  telaListaUsuarios = () => {
    this.setState({telaAtual: "listaUsers"});
  }

  render() {

    return (
      <MainContainer>

        <GlobalStyle />

        {this.trocarTela()}
        
      </MainContainer>
    );
  }
}

export default App;
