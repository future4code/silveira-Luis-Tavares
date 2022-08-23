import { useContext, useState } from "react";
import closeIcon from "../../assets/close.png";
import { ParticipationContext } from "../../context/ParticipationContext";
import { updateParticipation, deleteParticipation } from "../../services/requests";

import { ModalContainer } from "./styles";

export const Modal: React.FC = () => {
    const { setParticipations, setIsModalOpen, selectedPerson } = useContext(ParticipationContext);
    const [participationValue, setParticipationValue] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setParticipationValue(event.target.value);

    const onClickUpdate = () => {
        const body = {
            ...selectedPerson,
            participation: Number(participationValue)
        };

        updateParticipation(body, setParticipations);
        
        setIsModalOpen(false);
    };

    const onClickDelete = () => {
        deleteParticipation(selectedPerson, setParticipations);

        setIsModalOpen(false);
    };

    return (
        <ModalContainer>
            <input
                required
                name="participation"
                value={participationValue}
                type="number"
                placeholder="Update participation"
                onChange={onChange}
            />
            <button onClick={ () => onClickUpdate() }>Update</button>
            
            <button onClick={ () => onClickDelete() }>Delete</button>
            <img
                src={ closeIcon }
                alt="Close button"
                onClick={ () => setIsModalOpen(false) }
            />
        </ModalContainer>
    );
};