import styled from "styled-components";

export const HeaderMainPage = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid grey;
    background-color: aliceblue;

    div {
        display: flex;
        position: relative;
        left: 4%;

        h1 {
            color: #F23D7F;
        }

        img {
            width: 30px;
            height: 30px;
            margin-top: 8px;
            margin-right: 2px;
        }
    }

    >img {
        width: 30px;
        position: relative;
        left: 20%;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`

export const HeaderMatchesPage = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid grey;
    background-color: aliceblue;

    div {
        display: flex;
        position: relative;
        left: 4%;

        h1 {
            color: #F23D7F;
        }

        img {
            width: 30px;
            height: 30px;
            margin-top: 8px;
            margin-right: 2px;
        }
    }

    >img {
        width: 30px;
        position: relative;
        right: 73%;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`