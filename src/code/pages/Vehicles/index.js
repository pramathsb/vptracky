import React, { Suspense } from "react";
import VehicleList from "../../components/VehicleList";

function Vehicles(props) {
  const { dispatch, store } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>{<VehicleList store={store} dispatch={dispatch} />}</Suspense>
  );
}

export default Vehicles;
