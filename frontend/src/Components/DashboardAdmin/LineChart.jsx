import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import UserContext from '../../Context/ContextAPI';
const LineCharts = () => {
  const {teamprogress} = useContext(UserContext);
  let data=[];
  if(teamprogress){
      data = teamprogress.map((item) => ({
          name: item.teamname,
          value: parseInt(item.averageProgress, 10),
       }));
   
  }

  return (
    <LineChart width={300} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="red" />
    </LineChart>
  );
};

export default LineCharts;