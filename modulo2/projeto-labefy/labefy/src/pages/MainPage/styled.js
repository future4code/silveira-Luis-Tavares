import styled from "styled-components";

export const MainPageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    color: #ffff;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        margin-top: 20px;
        width: 50px;
    }
`

export const ContainerNewPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 200px;
        text-align: center;
        padding: 2px;
    }

    button {
        margin-top: 5px;
        width: 50%;
    }
`

export const ButtonContainer = styled.div`
    border: 1px solid #b3b3b3;
    padding: 3px 5px;
    border-radius: 5px;
    background-color: #212121;
    text-transform: uppercase;

    span {
        font-weight: bolder;
        font-size: 1em;
        text-align: center;
        margin: 0;
    }

    &:hover{
        cursor: pointer;
        background-color: #535353;
    }
`
