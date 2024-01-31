import React from "react";
import "./Piecharts.css";
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
const Piecharts = ({data}) => {
  console.log(data);
    const colorData = data.map(entry => {
        let color;        if (entry.value < 25) {
          color = 'red';
        } else if (entry.value >= 25 && entry.value < 50) {
          color = 'yellow';
        } else if (entry.value >= 50 && entry.value < 75) {
          color = 'blue';
        } else {
          color = 'green';
        }
        return { ...entry, color };
      });
    

    return(
       
        <div className="Pie-Chart-container">
      <PieChart width={600} height={400}>
        <Pie
          dataKey="value"
          data={colorData}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {colorData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>


    )
};
 
export default Piecharts;