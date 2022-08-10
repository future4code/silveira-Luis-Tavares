import { Participation } from "../../interfaces/participation";
import { Table } from "./styles";

interface Props {
    participations: Participation[]
};

export const ParticipationTable: React.FC<Props> = ({ participations }) => {
    const list = participations.map((part, index) => {
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
                {list}
            </tbody>
        </Table>
    );
};