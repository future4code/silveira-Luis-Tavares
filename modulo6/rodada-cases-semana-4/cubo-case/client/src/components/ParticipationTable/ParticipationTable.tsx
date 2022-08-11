import { useContext, useEffect } from "react";
import { ParticipationContext } from "../../context/ParticipationContext";

import { Table } from "./styles";

export const ParticipationTable: React.FC = () => {
    const { participations } = useContext(ParticipationContext);

    const data = participations.map((part, index) => {
        return (
            <tr key={part.id}>
                <td>{index + 1}</td>
                <td>{part.first_name}</td>
                <td>{part.last_name}</td>
                <td>{part.participation}%</td>
            </tr>
        );
    });

    return (
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
    );
};