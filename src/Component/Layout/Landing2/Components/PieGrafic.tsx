import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PropsPieGraficType } from "../Types/propsPieGrafic";


interface Props{
    title:string
    data:PropsPieGraficType[]
}
const PieGrafic = ({title, data}: Props) => {
    
  const COLORS = [
    "#ce93d8",
    "#5c6bc0",
    "#b39ddb",
    "#4dd0e1",
    "#f48fb1",
    "#d500f9",
  ];

  return (
    <div>
      <h2 className="text-2xl text-center">{title}</h2>
      <div style={{ width: "200px", height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              data={data}
              innerRadius={60}
              outerRadius={85}
              fill="#82ca9d"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieGrafic;
