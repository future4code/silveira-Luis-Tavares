import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    color: #ffff;
    width: 100%;

    span {
        border: 2px solid #535353;
        border-radius: 5px;
        padding: 3px 5px;
        font-weight: bolder;
        text-transform: uppercase;

        &:hover {
            cursor: pointer;
            background-color: #535353;
        }
    }
`

export const TracksContainer = styled.div`
    width: 100%;
`

export const MapContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #535353;
    height: 50px;
    width: 100%;
    padding: 0 5px;

    audio {
    height: 25px;
    /* width: 250px; */
    }

    img {
        margin-right: 5px;
        width: 18px;

        &:hover {
            cursor: pointer;
        }
    }
`

export const MusicDetailsContainer = styled.div`

    p {
        font-size: 0.75em;
    }

    p:last-child {
        color: #b3b3b3;
        font-size: 0.6em;
    }
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div {
        width: 80%;
        text-align: center;

        input {
        width: 45%;
        margin-right: 5px;
        text-align: center;
        }
    }

    input {
        text-align: center;
        margin-top: 5px;
        width: 80%;
    }

    button {
        margin-top: 8px;
        padding: 0 8px;
    }
`