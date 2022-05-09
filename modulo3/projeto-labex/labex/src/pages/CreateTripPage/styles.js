import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    margin-top: 20px;

    input {
        color: black;
        padding: 12px;
        border-radius: 10px;
        border: none;
        margin-bottom: 20px;
    }

    select {
        color: black;
        padding: 12px;
        border-radius: 10px;
        border: none;
        margin-bottom: 20px;

        option {
            color: black;
        }
    }

    // -------- BOTÕES --------
    div {
        display: flex;
        justify-content: center;
    }
`