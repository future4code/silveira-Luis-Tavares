import styled from "styled-components";

export const CirclesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 0.5rem;
    }
`;

export const Circle = styled.div`
    text-align: center;
    font-size: 27px;
    width: 34px;
    height: 34px;
    font-weight: bold;
    border-radius: 50%;
    padding: 2rem;
    background-color: white;
    margin: 0.5rem 1rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        margin: 0.5rem 0.6rem;
        width: 5px;
        height: 5px;
    }
`;