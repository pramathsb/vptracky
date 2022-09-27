import axios from "axios";
import React from "react";
import Tabs from "../common/Tabs";

function VehicleDashboard(props) {
  const { dispatch, store, vehicleId } = props;
  React.useEffect(() => {
    (async () => {
      if (!store?.vehicleId) {
        dispatch({ type: "SHOW_LOADER" });
        await axios.get("/api/vehicleList.json").then(({ data }) => {
          dispatch({ type: "SELECT_VEHICLE", payload: data });
        });
        dispatch({ type: "HIDE_LOADER" });
      }
    })();
  }, [store?.vehicleId, dispatch]);
  const { TXT } = store;
  return (
    <>
      <Tabs />
      <h2 className="my-4">{vehicleId}</h2>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="dashboard">
            {TXT.navigation.dashboard}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="fuel">
            {TXT.navigation.fuel}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="service">
            {TXT.navigation.service}
          </a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="home-tab">
          ...
        </div>
        <div className="tab-pane fade" id="fuel" role="tabpanel" aria-labelledby="profile-tab">
          ...
        </div>
        <div className="tab-pane fade" id="service" role="tabpanel" aria-labelledby="contact-tab">
          ...
        </div>
      </div>

      <div className="row flex-wrap g-0 dashboard p-4 mb-4">
        <div className="col-4 p-2">{TXT.dashboard.type}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.brand}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.model}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.fuelType}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.fuelCapacity}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.dateOfPurchase}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.age}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.ratedMileage}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.insauranceRenewalDate}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.nextServiceDate}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.nextServiceKm}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.distanceTravelled}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.totalFuelConsumedLtrs}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.totalFuelConsumedCost}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.totalAverageMileage}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.costPerKm}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.model}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.minDistOnFullTank}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.maxDistOnFullTank}: N/A</div>
        <div className="col-4 p-2">{TXT.dashboard.avgDistOnFullTank}: N/A</div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>{TXT.dashboard.table.date}</th>
            <th>{TXT.dashboard.table.odo}</th>
            <th>{TXT.dashboard.table.price}</th>
            <th>{TXT.dashboard.table.quantity}</th>
            <th>{TXT.dashboard.table.totalPrice}</th>
            <th>{TXT.dashboard.table.fulltank}</th>
            <th>{TXT.dashboard.table.distance}</th>
            <th>{TXT.dashboard.table.mileage}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default VehicleDashboard;
