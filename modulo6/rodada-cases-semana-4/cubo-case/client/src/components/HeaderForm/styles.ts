import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #00b8e1;

    input {
        border: none;
        border-radius: 2px;
        margin-right: 1rem;
        padding: 1rem;
        width: 15%;
    };
    
    button {
        color: white;
        background-color: #00b8e1;
        border: 1px solid white;
        font-weight: bold;
        padding: 1rem;
        text-align: center;
        width: 8%;

        &:hover {
            cursor: pointer;
            background-color: aqua;
        }
    };
`;