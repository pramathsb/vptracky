import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import VehicleDashboard from "../../components/VehicleDashboard";
import VehicleList from "../../components/VehicleList";

function Vehicles(props) {
  const { dispatch, store } = props;
  const { vehicleId } = useParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!vehicleId && VehicleList && <VehicleList store={store} dispatch={dispatch} />}
      {vehicleId && VehicleDashboard && (
        <VehicleDashboard store={store} dispatch={dispatch} vehicleId={vehicleId} />
      )}
    </Suspense>
  );
}

export default Vehicles;
