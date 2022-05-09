import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin-bottom: 15px;

    span {
        font-size: 1.5em;
        border: 1px solid black;
        border-radius: 50%;
        padding: 15px;
        transition: all .2s ease-in-out;

    }

    // DESLIKE
    span:first-of-type {

        &:hover {
            cursor: pointer;
            background-color: red;
            transform: scale(1.12); 
        }
    }

    // LIKE
    span:last-of-type {
        &:hover {
            cursor: pointer;
            background-color: green;
            transform: scale(1.12); 
        }
    }
`