import styled from "styled-components";
import { dia_de_sorte, light_grey, loto_facil, loto_mania, mega_sena, quina, time_mania } from "../../constants/colors";

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
`;

interface LotteryInfoContainerProps {
    background: string
};

export const LotteryInfoContainer = styled.div<LotteryInfoContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 8rem;
    transition: 0.8s;

    background-color: ${props => {
        switch(props.background) {
            case "MEGA-SENA":
                return `${mega_sena}`;
            case "QUINA":
                return `${quina};`
            case "LOTOFÁCIL":
                return `${loto_facil}`;
            case "LOTOMANIA":
                return `${loto_mania}`;
            case "TIMEMANIA":
                return `${time_mania}`;
            case "DIA DE SORTE":
                return `${dia_de_sorte}`;
        };
    }};
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 22rem;
    
    img {
        margin-right: 1.5rem;
    }

    h1 {
        font-size: 2rem;
        color: white;
    }
`;

export const NumbersInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${light_grey};
    margin-left: -20rem;
    clip-path: circle(110% at calc(100% - 2rem) 50%);

    p {
        justify-self: baseline;
    }
`;

export const FooterContainer = styled.footer`
    color: white;

    p {
        &:first-child {
        font-size: 14px;
        }
    }

    p {
        &:last-child {
            font-weight: bolder;
        }
    }
`;