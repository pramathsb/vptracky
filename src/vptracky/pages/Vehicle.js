import React, { useState, useCallback } from "react";
import Title from "../components/Title";
import DashBoard from "../components/DashBoard";
import FuelTable from "../components/FuelTable";
import nios from "../json/fuelTable/nios.json";

function Vpt(props) {
  const [state, setState] = useState(nios);

  const updateDashboardData = useCallback(({ totalDistance, totalFuel, averageMileage }) => {
    setState((state) => {
      return { ...state, dashBoardData: { ...state.dashBoardData, totalDistance, totalFuel, averageMileage } };
    });
  }, []);

  return (
    <div className="container">
      <Title />
      <hr />
      <div className="my-4"></div>
      <DashBoard data={state.dashBoardData} />
      <div className="my-4"></div>
      <FuelTable data={state.fuelData} updateDashboardData={updateDashboardData} />
    </div>
  );
}

export default Vpt;
