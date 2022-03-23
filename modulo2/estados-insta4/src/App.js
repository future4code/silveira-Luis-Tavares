import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import fotoPerfil1 from './img/foto-perfil1.jpg'
import fotoPost1 from './img/foto-post1.jpg'
import fotoPerfil2 from './img/foto-perfil2.jpg'
import fotoPost2 from './img/foto-post2.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'luis'}
          fotoUsuario={ fotoPerfil1 }
          fotoPost={ fotoPost1 }
        />

        <Post
          nomeUsuario={'carlos'}
          fotoUsuario={ fotoPerfil2 }
          fotoPost={ fotoPost2 }
        />
      </MainContainer>
    );
  }
}

export default App;
