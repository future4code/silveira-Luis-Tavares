import { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

import { Participation } from "../interfaces/participation";
import { getParticipations } from "../services/requests";

interface Props {
    children: ReactNode;
};

interface Context {
    participations: Participation[],
    setParticipations: React.Dispatch<SetStateAction<Participation[]>>
};

const initialValue = {
    participations: [],
    setParticipations: () => {}
};

export const ParticipationContext = createContext<Context>(initialValue);

export const ParticipationContextProvider: React.FC<Props> = ({ children }) => {
    const [participations, setParticipations] = useState<Participation[]>(initialValue.participations);
    
    return (
        <ParticipationContext.Provider value={{ participations, setParticipations }}> 
            {children} 
        </ParticipationContext.Provider>
    );        
};