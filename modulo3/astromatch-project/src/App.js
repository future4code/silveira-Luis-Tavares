import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { MainPage } from './pages/MainPage/MainPage';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';
import { Header } from './components/Header/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ScreenContainer = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const selectPage = () => {
    switch(currentPage) {
      case "main":
        return <MainPage 
            currentPage={currentPage}
            changePage={changePage}
            />;

      case "matches":
        return <MatchesPage 
            currentPage={currentPage}
            changePage={changePage}
            />;
      default:
        return "main";
    }
   }

   const changePage = nextPage => setCurrentPage(nextPage);

  return (
    <ScreenContainer>
      <GlobalStyle />

      {selectPage()}

    </ScreenContainer>
  );
}

export default App;
