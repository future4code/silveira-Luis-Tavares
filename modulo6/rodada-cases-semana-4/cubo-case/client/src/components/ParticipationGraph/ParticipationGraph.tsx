import { useContext, useEffect } from "react";
import { ParticipationContext } from "../../context/ParticipationContext";

import { Chart } from "react-google-charts";

export const ParticipationGraph: React.FC = () => {
  const { participations, participationsValue } = useContext(ParticipationContext);

  const participationsArray = participations.map(person => {
    return [
      `${person.first_name}`,
      person.participation
    ];
  });

  const emptyValue = participationsValue.length > 0
  ? 100 - participationsValue.reduce((prev, curr) => prev + curr)
  : 100;

  const data = [
    ["Person", "Participation"],
    ["Empty", emptyValue],
    ...participationsArray
  ];

  const options = {
    pieHole: 0.5,
    is3D: false,
    chartArea: {'width': '100%', 'height': '90%', 'left': '0', 'top': '0'},
    legend: {'position': 'bottom'},
    colors: ["#dad6d6", "#237ef5", "#19c298", "#96129b", "#ca480c", "#1ea312"]
  };

  return (
    <div>

      <Chart
       chartType="PieChart"
       width="20vw"
       height="300px"
       data={data}
       options={options}
    />

    </div>
  );
};