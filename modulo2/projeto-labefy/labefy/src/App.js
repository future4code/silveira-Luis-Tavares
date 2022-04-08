import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { MainPage } from "./pages/MainPage/MainPage";
import { PlaylistsPage } from "./pages/PlaylistsPage/PlaylistsPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #121212;
  }
`

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 25vw;
  height: 50vh;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  background-color: #212121;
`

const Credits = styled.p`
  color: #ffff;
`

export class App extends React.Component {
  state = {
    currentPage: "main"
  }

  changePage = () => {
    switch(this.state.currentPage) {
      case "main":
        return (
          <MainPage 
          changeToPlaylists={this.changeToPlaylists}
          />
        )
      case "playlists":
        return (
          <PlaylistsPage 
          changeBackToMain={this.changeBackToMain}
          />
        )
      default:
        return <MainPage />
    }
  }

  changeToPlaylists = () => {
    this.setState({currentPage: "playlists"});
  }

  changeBackToMain = () => {
    this.setState({currentPage: "main"});
  }

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        
        <SubContainer>
          {this.changePage()}
        </SubContainer>


        <footer><Credits>made by: @luissfmt</Credits></footer>
      </MainContainer>
    );
  }
}

export default App;
