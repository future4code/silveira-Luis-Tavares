import { useEffect, useState } from "react";
import { HeaderForm } from "../components/HeaderForm/HeaderForm";
import { ParticipationGraph } from "../components/ParticipationGraph/ParticipationGraph";
import { ParticipationTable } from "../components/ParticipationTable/ParticipationTable";
import { Participation } from "../interfaces/participation";
import { getParticipations } from "../services/participation";
import { MainContainer } from "./styles";

export const MainPage: React.FC = () => {
    const [participations, setParticipations] = useState<Participation[]>([]);

    useEffect(() => {
        getParticipations(setParticipations);
    }, []);

    // useEffect(() => {}, [participations]);

    return (
        <>
          <HeaderForm />

          <div>
            <h1>Gráfico</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, vitae culpa quisquam aliquid sint architecto eveniet commodi repudiandae? Laborum, est esse at blanditiis corrupti porro nobis molestiae asperiores beatae quae?</p>
          </div>

          <MainContainer>
            <ParticipationTable participations={participations} />

            <ParticipationGraph />

          </MainContainer>
        </>
    );
};