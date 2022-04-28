import styled from "styled-components";

export const TripsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
    padding: 10px;
    width: 50vw;

    //Título Página 
    h2 {
        font-size: 1.8rem;
    }
`

export const NoTripMessage = styled.p`
    text-align: center;
`