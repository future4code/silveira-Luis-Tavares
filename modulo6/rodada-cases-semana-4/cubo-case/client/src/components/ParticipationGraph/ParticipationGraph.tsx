import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "Gráfico de participação",
  pieHole: 0.4,
  is3D: false,
};

export const ParticipationGraph = () => {
  return (
    <div style={{border: "1px solid black", width: "50%"}}>
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
;}