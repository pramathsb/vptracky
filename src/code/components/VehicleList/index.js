import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function VehicleList(props) {
  const { dispatch, store } = props;
  const navigate = useNavigate();
  const handleVehicleSelect = () => {
    navigate("nios");
  };

  React.useEffect(() => {
    (async () => {
      if (!store?.vehicleList) {
        dispatch({ type: "SHOW_LOADER" });
        await axios.get("/api/vehicleList.json").then(({ data }) => {
          console.log("VehicleList API Called");
          dispatch({ type: "UPDATE_VEHICLE_LIST", payload: data });
        });
        dispatch({ type: "HIDE_LOADER" });
      }
    })();
  }, [store?.vehicleList, dispatch]);

  return (
    <>
      <button type="button" className="btn btn-primary me-2" onClick={handleVehicleSelect}>
        Nios
      </button>
      <button type="button" className="btn btn-primary me-2" onClick={handleVehicleSelect}>
        p220
      </button>
      <button type="button" className="btn btn-primary me-2" onClick={handleVehicleSelect}>
        wego
      </button>
      <button type="button" className="btn btn-primary me-2" onClick={handleVehicleSelect}>
        Add New Vehicles
      </button>
    </>
  );
}

export default VehicleList;
