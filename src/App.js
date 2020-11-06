import React from "react";
import Vpt from "./layouts/main";

class App extends React.Component {
  state = {
    car: {
      carData: {
        brand: "Hyundai",
        model: "i10 Grand Nios",
        type: "Car",
        fuelType: "Diesel",
        fuel: "47 litres",
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
          quantiyRs: 0,
          quantiyLtrs: 10,
          // prevCapactiy: 0,
        },
        {
          id: 1,
          date: "9/2/2020",
          odo: 20,
          fuelPrice: 68.3,
          quantiyRs: 1000,
          quantiyLtrs: 14.64,
          // prevCapactiy: 5,
        },
        {
          id: 2,
          date: "19/2/2020",
          odo: 176,
          fuelPrice: 67.55,
          quantiyRs: 2921,
          quantiyLtrs: 43.23,
          // prevCapactiy: 20,
        },
        {
          id: 3,
          date: "06/05/2020",
          odo: 840,
          fuelPrice: 66.75,
          quantiyRs: 1799,
          quantiyLtrs: 26.96,
          // prevCapactiy: 20,
        },
        {
          id: 4,
          date: "10/06/2020",
          odo: 1631,
          fuelPrice: 68.95,
          quantiyRs: 2825.57,
          quantiyLtrs: 40.98,
          // prevCapactiy: 5,
        },
        {
          id: 5,
          date: "03/07/2020",
          odo: 2407,
          fuelPrice: 77.7,
          quantiyRs: 3073.81,
          quantiyLtrs: 39.56,
          // prevCapactiy: 6,
        },
        {
          id: 6,
          date: "08/09/2020",
          odo: 3185,
          fuelPrice: 78.65,
          quantiyRs: 3383.52,
          quantiyLtrs: 43.02,
          // prevCapactiy: 6,
        },
        {
          id: 7,
          date: "02/10/2020",
          odo: 3952,
          fuelPrice: 76,
          quantiyRs: 3383.52,
          quantiyLtrs: 43.8,
          // prevCapactiy: 6,
        },
      ],
    },
  };

  render() {
    return <Vpt state={this.state} />;
  }
}

export default App;
