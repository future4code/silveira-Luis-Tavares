import { useContext } from "react";
import { ParticipationContext } from "../../context/ParticipationContext";

import { Table } from "./styles";
import { Modal } from "../Modal/Modal";

export const ParticipationTable: React.FC = () => {
    const { 
        participations,
        isModalOpen,
        setIsModalOpen,
        setSelectedPerson
    } = useContext(ParticipationContext);

    const OpenModalWithPersonData = (first_name: string, last_name: string) => {
        setSelectedPerson({
            first_name,
            last_name
        });

        setIsModalOpen(true);
    };

    const data = participations.map((part, index) => {
        return (
            <tr key={part.id}>
                <td>{index + 1}</td>
                <td onClick={ () => OpenModalWithPersonData(part.first_name, part.last_name) }>{part.first_name}</td>
                <td>{part.last_name}</td>
                <td>{part.participation}%</td>
            </tr>
        );
    });

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th />
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation</th>
                    </tr>
                </thead>
            
                <tbody>
                    {data}
                </tbody>
            </Table>

            { isModalOpen && <Modal /> }
        </div>
    );
};