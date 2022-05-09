import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 90%;
    height: 420px;
    position: relative;
    box-shadow: 0px 2px 5px 2px grey;
    overflow: hidden;
    border-radius: 5px;
    display: flex;
    align-items: center;
`

export const BlurredContainer = styled.div`
    filter: blur(20px);
    position: absolute;
    height: 430px;
    width: 100%;
    background: url(${props => props.background});
`

export const ProfilePicture = styled.img`
    width: 100%;
    position: absolute;
`

export const DescriptionContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    padding: 10px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)
`

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;


    // ESTILIZAÇÃO NOME
    p:first-of-type {
        font-size: 1.5em;
        font-weight: bolder;
    }

    // ESTILIZAÇÃO IDADE
    p:last-of-type {
        font-size: 1.2em;
        font-weight: 500;
        margin-left: 8px;
    }
`

export const UserBio = styled.p`
    margin-top: 8px;
`