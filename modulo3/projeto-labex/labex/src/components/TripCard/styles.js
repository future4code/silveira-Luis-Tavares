import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 20px;
`

export const Card = styled.div`
    background: linear-gradient(to right, #323a48, transparent);
    border: 0.1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    padding: 30px 15px;

    // Título
    h3 {
        font-size: 1.75em;
        font-family: "Helvetica";
        letter-spacing: -1;
        font-weight: 400;
        /* width: 40%; */
    }

    // Infos
    p {
        color: #aeb0b5;
        margin-top: 15px;
    }
`