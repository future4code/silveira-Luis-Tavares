import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { MainPage } from './pages/MainPage/MainPage';
import { MatchesPage } from './pages/MatchesPage/MatchesPage';
import { ClearButton } from './components/ClearButton/ClearButton';
import { BASE_URL, STUDENT } from './constants/requests';
import axios from 'axios';
import { Header } from './components/Header/Header';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #707580;
    position: fixed;
  	top: 50%;
	  left: 50%;
  	transform: translate(-50%, -50%)
  }
`

export const ScreenContainer = styled.div`
    width: 400px;
    height: 600px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #F2F2F2;
`

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const clearFunction = async () => {
    try {
        await axios.put(`${BASE_URL}/${STUDENT}/clear`);
        alert("Matches e Swipes resetados!");
    } catch (error) {
        console.log(error);
    }
  }

  const selectPage = () => {
    switch(currentPage) {
      case "main":
        return <MainPage
            currentPage={currentPage}
            changePage={changePage}
            />;

      case "matches":
        return <MatchesPage
            changePage={changePage}
            />;
      default:
        return "main";
    }
   }

   const changePage = nextPage => setCurrentPage(nextPage);

  return (
    <>
      <ScreenContainer>
        <GlobalStyle />

      <Header 
        currentPage={currentPage}
        changePage={changePage}
      />
      
        {selectPage()}
      </ScreenContainer>

      <ClearButton clearFunction={clearFunction} />
    </>
  );
}

export default App;
