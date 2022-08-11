import { useContext } from "react";
import { ParticipationContext } from "../../context/ParticipationContext";

import { Chart } from "react-google-charts";

export const ParticipationGraph: React.FC = () => {
  const { participations } = useContext(ParticipationContext);

  const participationsArray = participations.map((part: any) => {
    return [
      `${part.first_name}`,
      `${part.participation}`
    ];
  });

  const data = [
    ["Usuário", "Participação"],
    ...participationsArray
  ];

  const options = {
    pieHole: 0.5,
    is3D: false,
    chartArea: {'width': '100%', 'height': '90%', 'left': '0', 'top': '0'},
    legend: {'position': 'bottom'}
  };

  return (
    <div>

      <Chart
      chartType="PieChart"
      width="35vw"
      height="300px"
      data={data}
      options={options}
    />

    </div>
  );
;}