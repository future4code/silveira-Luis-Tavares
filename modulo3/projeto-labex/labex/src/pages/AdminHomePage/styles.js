import styled from "styled-components";

export const ContainerAdminHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const OutOfBoxText = styled.p`
    text-align: center;
    font-style: italic;
`

export const TripsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid grey;
    padding: 10px;
    margin-top: 15px;
    width: 500px;
    height: 50px;
    background: linear-gradient(to right, #323a48, transparent);
    
    p {
        font-size: 1.2em;

        &:hover {
        color: #aeb0b5;
        cursor: pointer;
        }
    }

    img {
        border-radius: 50%;
        padding: 6px;

        &:hover {
        background-color: red;
        transition: 0.5s;
        cursor: pointer;
        }

    }
`

export const DeleteContainer = styled.div`
    position: relative;
    border: 2px solid black;
    top: 50%;
    bottom: 50%;
    /* left: 50%; */
    right: 50%;
`