import React, { useContext, useState, useEffect } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { Route, Routes } from "react-router-dom";
import Table from "../Table/Table";
import UserContext from "../../Context/ContextAPI";
import Bargraphs from "../Bargraphs/Bargraphs";
import Piecharts from "../Piecharts/Piecharts";
import Dashboard from "../DashboardAdmin/Dashboard";
import Calendar from "../Calender/Calender";

const Admin = () => {
  const { teamprogress } = useContext(UserContext);
 // Initialize with 0
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    if (teamprogress) {
      const newData = teamprogress.map((item) => ({
        name: item.teamname,
        value: parseInt(item.averageProgress, 10),
      }));

      setData(newData);
    }
  }, [teamprogress]);

  return (
    <div>
      <NavbarAdmin />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="teams_progress" element={<Table data={teamprogress} />} />
        <Route path="barcharts" element={<Bargraphs data={data} />} />
        <Route path="piecharts" element={<Piecharts data={data} />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
};

export default Admin;
