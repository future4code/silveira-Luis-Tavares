import { createContext, ReactNode, SetStateAction, useState } from "react";

import { DeleteParticipation, Participation, UpdateParticipation } from "../interfaces/participation";

interface Props {
    children: ReactNode;
};

interface Context {
    participations: Participation[],
    setParticipations: React.Dispatch<SetStateAction<Participation[]>>,
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>,
    selectedPerson: DeleteParticipation | UpdateParticipation,
    setSelectedPerson: React.Dispatch<SetStateAction<DeleteParticipation>>
};

const initialValue = {
    participations: [],
    setParticipations: () => {},
    isModalOpen: false,
    setIsModalOpen: () => {},
    selectedPerson: {} as DeleteParticipation | UpdateParticipation,
    setSelectedPerson: () => {}
};

export const ParticipationContext = createContext<Context>(initialValue);

export const ParticipationContextProvider: React.FC<Props> = ({ children }) => {
    const [participations, setParticipations] = useState<Participation[]>(initialValue.participations);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(initialValue.isModalOpen);
    const [selectedPerson, setSelectedPerson] = useState<DeleteParticipation>(initialValue.selectedPerson);
    
    return (
        <ParticipationContext.Provider value={{
            participations,
            setParticipations,
            isModalOpen,
            setIsModalOpen,
            selectedPerson,
            setSelectedPerson
        }}> 
            { children }
        </ParticipationContext.Provider>
    );        
};