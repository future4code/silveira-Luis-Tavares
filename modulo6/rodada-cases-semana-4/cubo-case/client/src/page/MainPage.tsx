import { useContext, useEffect } from "react";
import { ParticipationContext } from "../context/ParticipationContext";

import { HeaderForm } from "../components/HeaderForm/HeaderForm";
import { ParticipationGraph } from "../components/ParticipationGraph/ParticipationGraph";
import { ParticipationTable } from "../components/ParticipationTable/ParticipationTable";

import { getParticipations } from "../services/requests";

import { MainContainer, TitleContainer } from "./styles";

export const MainPage: React.FC = () => {
  const { setParticipations } = useContext(ParticipationContext);

  useEffect(() => {
    getParticipations(setParticipations);
  }, []);

  console.log("renderizou");

  return (
      <>
        <HeaderForm />

        <TitleContainer>
          <h1>Gráfico de participação</h1>
          <p>Formulário de inscrição de uma pessoa em uma tabela de participação, sendo a participação visualmente representada no gráfico.</p>
        </TitleContainer>

        <MainContainer>

          <ParticipationTable />

          <ParticipationGraph />

        </MainContainer>
      </>
  );
};