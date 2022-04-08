import styled from "styled-components";

export const ContainerPlaylistPage = styled.div`
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;

    p {
        text-align: center;
        font-size: 1.2em;
        text-transform: uppercase;
    }

    span {
        border: 2px solid #535353;
        border-radius: 5px;
        padding: 3px 5px;
        font-weight: bolder;
        text-transform: uppercase;

        &:hover{
            cursor: pointer;
            background-color: #535353;
        }
    }
`

export const ListContainer = styled.ul`
    display: flex;
    width: 80%;
    flex-direction: column;

    p {
        text-align: center;
        text-transform: capitalize;
        font-size: 1em;
    }
`

export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #535353;
    padding: 5px;
    margin-bottom: 10px;
    list-style: none;

    li {
        margin: 0;
        color: #b3b3b3;

        &:hover {
            cursor: pointer;
            color: #ffff;
            font-weight: 500;
        }
    }

    button {
        padding: 0 8px;
    }
`