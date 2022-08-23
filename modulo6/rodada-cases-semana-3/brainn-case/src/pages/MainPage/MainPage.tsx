import { useEffect, useState } from "react";

import { MainContainer, LotteryInfoContainer, TitleContainer, NumbersInfoContainer, FooterContainer } from "./styles.js";

import { LotterySelect } from "../../components/LotterySelect/LotterySelect";

import { Concourse } from "../../interfaces/Concourse.js";
import { getConcourseById, getConcourses, getLotterys } from "../../services/requests.js";
import { Lottery } from "../../interfaces/Lottery.js";
import { NumbersCard } from "../../components/NumbersCircle/NumbersCircle.js";

import lotteryIcon from "../../assets/lottery-icon.svg";

export const MainPage: React.FC = () => {
    const [lotterys, setLotterys] = useState<Lottery[]>([]);
    const [concourses, setConcourses] = useState<Concourse[]>([]);

    const [currentConcourse, setCurrentConcourse] = useState<any>({});
    const [currentLotteryId, setCurrentLotteryId] = useState<number>(0);

    const lotteryName = lotterys.find(lottery => lottery.id === currentLotteryId)?.nome.toUpperCase();

    useEffect(() => {
        getLotterys(setLotterys);
        getConcourses(setConcourses);
    }, []);
    
    useEffect(() => {
        getConcourseById(concourses, currentLotteryId, setCurrentConcourse);
    }, [concourses, currentLotteryId]);

    return ( currentConcourse && currentConcourse.data &&
        <> { 
            <MainContainer>

                <LotteryInfoContainer background={lotteryName as string}>
                    <LotterySelect 
                    lotterys={lotterys}
                    setCurrentLotteryId={setCurrentLotteryId} />

                    <TitleContainer>
                        <img src={lotteryIcon} alt="Logo" />
                        <h1>{lotteryName}</h1>
                    </TitleContainer>
                    
                    <FooterContainer>
                        <p>CONCURSO</p>
                        <p>{currentConcourse.id} - {currentConcourse.data.substring(0, 10).split("-").reverse().join("/")}</p>
                    </FooterContainer>
                </LotteryInfoContainer>

                <NumbersInfoContainer>
                    <div  />

                    <NumbersCard numbers={currentConcourse.numeros} />

                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </NumbersInfoContainer>

            </MainContainer>
        } </>
    );
};