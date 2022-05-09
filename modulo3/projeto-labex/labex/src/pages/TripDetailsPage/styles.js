import styled from "styled-components";

export const ContainerTripDetails = styled.div`
    /* border: 1px solid grey; */
    width: 100%;
`

export const ContainerTripInfos = styled.div`
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    text-align: center;
    
    p {
        padding: 5px 15px;
        color: #aeb0b5;
        font-size: 1.2rem;
    }

    p:last-of-type {
        margin-bottom: 20px;
    }
`

export const OutOfBoxText = styled.p`
    text-align: center;
    font-style: italic;
`

export const FlexContainerCandidates = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px solid grey;
`

export const ContainerCandidates = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 250px;
    width: 350px;
    margin: 0 20px;
    border: 2px solid white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 30px;

    // ---------- NOME CANDIDATOS ----------
    h3 {
        text-align: center;
    }

    // ---------- INFO CANDIDATOS ----------
    p {
        padding: 2px 15px;
        font-size: 1.05rem;
    }

    // ---------- CONTAINER BOTÕES ----------
    div:last-of-type {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.25rem;
        width: 50%;
        /* background-color: grey; */

        // ---------- BOTÃO REPROVAR ----------
        span:first-of-type {
            padding: 10px;
            border: 3px solid grey;
            border-radius: 50%;
            /* background-color: #aeb0b5; */

            &:hover {
                background-color: red;
                transition: 0.35s;
                cursor: pointer;
            }
        }

        span:last-of-type {
            padding: 10px;
            border: 3px solid grey;
            border-radius: 50%;
            /* background-color: #aeb0b5; */

            &:hover {
                background-color: green;
                transition: 0.35s;
                cursor: pointer;
            }
        }
    }
`

export const ContainerApprovedList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    li {
        list-style-type: none;
        text-align: center;
        text-transform: uppercase;
        padding: 10px 15px;
    }
`