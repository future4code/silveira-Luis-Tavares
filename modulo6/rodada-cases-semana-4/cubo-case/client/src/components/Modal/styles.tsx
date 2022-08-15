import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    border: 1px solid gray;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-top: 0.8rem;
    box-shadow: 2px 15px 15px lightgray;
    background-color: #e4e7e7;

    input {
        height: fit-content;
        padding: 0.4rem;
        border: none;
        border-radius: 3px;
    };

    button {
        height: fit-content;
        border-radius: 5px;
        border: 1px solid gray;
        padding: 0.5rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: x-small;

        &:hover {
            cursor: pointer;
        };

        :first-of-type {
            background-color: #a4d8a4;

            &:hover {
                background-color: #84ac84;
            };
        };

        :last-of-type {
            background-color: #c55252;
            color: white;

            &:hover {
                background-color: #7c3d3d;
            };
        };
    };

    img {
        width: 15px;
        height: fit-content;
        border-radius: 50%;
        padding: 0.5rem;
        transition: 0.2s;
        background-color: white;

        &:hover {
            background-color: #9c9a9a;
            cursor: pointer;
        };
    };
`;