import styled from "styled-components";

export const ContainerMatches = styled.div`
    width: 100%;
    position: relative;
    bottom: 45%;
    margin-left: 10px;
`

export const MatchesList = styled.li` 
    display: flex;
    align-items: center;
    list-style: none;
    width: 390px;
    margin-bottom: 10px;

    &:hover {
        background-color: grey;
    }

        img {
            width: 40px;
            border-radius: 50%;
            margin-right: 20px;
        }
`