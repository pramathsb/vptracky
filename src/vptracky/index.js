import React, { useState, useCallback } from "react";
import CarDetails from "./components/carDetails/carDetails";
import OdoDetails from "./components/odoDetails/odoDetails";

function Vpt(props) {
  const [state, setState] = useState({
    carData: {
      brand: "Hyundai",
      model: "i10 Grand Nios",
      type: "Car",
      fuelType: "Diesel",
      fuel: "48 litres",
      ratedMileage: "25 Km/l",
      actualMileage: "20 Km/l",
      topSpeed: "110 km/h",
      age: "",
      dateOfPurchase: "2/9/2020",
    },
    odoData: [
      {
        id: 0,
        date: "9/2/2020",
        odo: 0,
        fuelPrice: 0,
        quantityRs: 0,
        quantityLtrs: 10,
        fullTank: false,
        // prevCapacity: 0,
      },
      {
        id: 1,
        date: "9/2/2020",
        odo: 20,
        fuelPrice: 68.3,
        quantityRs: 1000,
        quantityLtrs: 14.64,
        fullTank: false,
        // prevCapacity: 5,
      },
      {
        id: 2,
        date: "19/2/2020",
        odo: 176,
        fuelPrice: 67.55,
        quantityRs: 2921,
        quantityLtrs: 43.23,
        fullTank: true,
        // prevCapacity: 20,
      },
      {
        id: 3,
        date: "06/05/2020",
        odo: 840,
        fuelPrice: 66.75,
        quantityRs: 1799,
        quantityLtrs: 26.96,
        fullTank: true,
        // prevCapacity: 20,
      },
      {
        id: 4,
        date: "10/06/2020",
        odo: 1631,
        fuelPrice: 68.95,
        quantityRs: 2825.57,
        quantityLtrs: 40.98,
        fullTank: true,
        // prevCapacity: 5,
      },
      {
        id: 5,
        date: "03/07/2020",
        odo: 2407,
        fuelPrice: 77.7,
        quantityRs: 3073.81,
        quantityLtrs: 39.56,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 6,
        date: "08/09/2020",
        odo: 3185,
        fuelPrice: 78.65,
        quantityRs: 3383.52,
        quantityLtrs: 43.02,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 7,
        date: "02/10/2020",
        odo: 3952,
        fuelPrice: 76,
        quantityRs: 3328.8,
        quantityLtrs: 43.8,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 8,
        date: "07/12/2020",
        odo: 4793,
        fuelPrice: 78.8,
        quantityRs: 3500.3,
        quantityLtrs: 44.42,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 9,
        date: "25/12/2020",
        odo: 5405,
        fuelPrice: 78.41,
        quantityRs: 2486.38,
        quantityLtrs: 31.71,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 10,
        date: "07/01/2021",
        odo: 6277,
        fuelPrice: 79.5,
        quantityRs: 3121.7,
        quantityLtrs: 39.26,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 11,
        date: "24/02/2021",
        odo: 6855,
        fuelPrice: 87.1,
        quantityRs: 3500.55,
        quantityLtrs: 40.19,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 12,
        date: "14/03/2021",
        odo: 7630,
        fuelPrice: 87.1,
        quantityRs: 3399.5,
        quantityLtrs: 39.03,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 13,
        date: "02/04/2021",
        odo: 8341,
        fuelPrice: 87.2,
        quantityRs: 3401.7,
        quantityLtrs: 39.01,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 14,
        date: "02/04/2021",
        odo: 9086,
        fuelPrice: 86.5,
        quantityRs: 3200.5,
        quantityLtrs: 37.0,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 15,
        date: "10/06/2021",
        odo: 9881,
        fuelPrice: 93.1,
        quantityRs: 1000.0,
        quantityLtrs: 10.74,
        fullTank: false,
        // prevCapacity: 6,
      },
      {
        id: 16,
        date: "04/07/2021",
        odo: 10105,
        fuelPrice: 95.4,
        quantityRs: 4000.12,
        quantityLtrs: 41.93,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 17,
        date: "17/07/2021",
        odo: 10832,
        fuelPrice: 96.27,
        quantityRs: 4037.56,
        quantityLtrs: 41.94,
        fullTank: true,
        // prevCapacity: 6,
      },
      {
        id: 18,
        date: "28/08/2021",
        odo: 11641,
        fuelPrice: 95.8,
        quantityRs: 4048.51,
        quantityLtrs: 42.26,
        fullTank: true,
        // prevCapacity: 6,
      },
    ],
  });

  const calculatedCarData = useCallback(({ totalDistance, totalFuel, averageMileage }) => {
    setState((state) => {
      return { ...state, carData: { ...state.carData, totalDistance, totalFuel, averageMileage } };
    });
  }, []);

  return (
    <div className="container">
      <h4 className="mt-4">Vehicle Performance Tracker</h4>
      <p>For those who are concerned about their Vehicle Performance</p>

      <hr />

      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hello there!</strong> Welcome to vehicle performance tracker.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div className="my-4"></div>

      <h5>My Vehicle Details </h5>

      <CarDetails data={state.carData} />

      <div className="my-4"></div>

      <h5>My Vehicle Data</h5>

      <OdoDetails data={state.odoData} calculatedCarData={calculatedCarData} />
    </div>
  );
}

export default Vpt;
