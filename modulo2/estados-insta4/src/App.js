import React from 'react';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import Post from './components/Post/Post';

const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  margin: 30px 0px;
`

const InputFormulario = styled.input`
  text-align: center;
  padding: 0.5rem;
  margin: 5px 10px;
`

const Botao = styled.input`
  padding: 3px 15px;
  margin: 5px;
  :hover {
    cursor: pointer;
    opacity: 75%;
  }
`

class App extends React.Component {
  state = {
    post: [
      {
      nomeUsuario: "luis",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/300/300"
    }, {
      nomeUsuario: "lu",
      fotoUsuario: "https://picsum.photos/50/60",
      fotoPost: "https://picsum.photos/250/300"
    }, {
      nomeUsuario: "is",
      fotoUsuario: "https://picsum.photos/50/70",
      fotoPost: "https://picsum.photos/300/250"
    }],
      inputUsuario: "",
      inputFotoUsuario: "",
      InputFotoPost: "" 
  }

  onChangeNomeUsuario = (e) => {
    this.setState({inputUsuario: e.target.value});
  }

  onChangeFotoUsuario = (e) => {
    this.setState({inputFotoUsuario: e.target.value});
  }

  onChangeFotoPost = (e) => {
    this.setState({InputFotoPost: e.target.value});
  }

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.InputFotoPost
    }

    const postsAtualizados = [...this.state.post]
    postsAtualizados.push(novoPost);

    this.setState({
      post: postsAtualizados
    });
  }

  render() {

    const feedCompleto = this.state.post.map((post) => {
      return (
          <Post {...post}
          />
      )
    }) 

    return (
        <div>
        <GlobalStyled />

          <Formulario>
          <InputFormulario
          value={this.state.nomeUsuario}  
          placeholder="Nome de usuário" 
          onChange={this.onChangeNomeUsuario} />

          <InputFormulario
          value={this.state.fotoUsuario}  
          placeholder="Link foto de perfil" 
          onChange={this.onChangeFotoUsuario} />

          <InputFormulario
          value={this.state.fotoPost} 
          placeholder="Link foto do post" 
          onChange={this.onChangeFotoPost} />  

          <Botao type="submit" value="Postar" onClick={this.adicionarPost}></Botao>
          </Formulario>

      <MainContainer>
        {feedCompleto}
      </MainContainer>
      </div>
    );
  }
}

export default App;
