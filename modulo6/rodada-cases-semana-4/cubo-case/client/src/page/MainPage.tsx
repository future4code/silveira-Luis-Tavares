import { useContext, useEffect } from "react";
import { ParticipationContext } from "../context/ParticipationContext";

import { HeaderForm } from "../components/HeaderForm/HeaderForm";
import { ParticipationGraph } from "../components/ParticipationGraph/ParticipationGraph";
import { ParticipationTable } from "../components/ParticipationTable/ParticipationTable";

import { getParticipations } from "../services/requests";

import { MainContainer, TitleContainer } from "./styles";

export const MainPage: React.FC = () => {
  const { participations, setParticipations, setParticipationsValue } = useContext(ParticipationContext);

  useEffect(() => {
    getParticipations(setParticipations);
  }, []);

  useEffect(() => {
    const participationsValues = participations.map(person => person.participation);

    setParticipationsValue(participationsValues);
  }, [participations]);

  return (
      <>
        <HeaderForm />

        <TitleContainer>
          <h1>Participation Graph</h1>
          <p>
            Person subscription form in a participation table, 
            where the participation is visually represented in the graph on the right.
          </p>
        </TitleContainer>

        <MainContainer>

          <ParticipationTable />

          <ParticipationGraph />

        </MainContainer>
      </>
  );
};