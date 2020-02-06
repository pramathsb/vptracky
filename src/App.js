import React from 'react';
import Vpt from './layouts/main'

class App extends React.Component {

  state = {
    car: {
      carData :{
        brand: 'Hyundai',
        model: 'i10 Grand Nios',
        type: 'Car',
        fuelType: 'Diesel',
        fuel: '37 litres',
        ratedMileage: '25 Km/l',
        actualMileage: '20 Km/l',
        topSpeed: '110 km/h',
        age: '',
        dateOfPurchase: '9/2/2020',
      },
      odoData: [
        {
          id: 1,
          date: '9/2/2020',
          odo: 23,
          fuelPrice: 75,
          quantiyRs: null,
          quantiyLtrs: 20,
          currentCapactiy: 20,
        },
        {
          id: 2,
          date: '9/2/2020',
          odo: 23,
          fuelPrice: 75,
          quantiyRs: null,
          quantiyLtrs: 20,
          currentCapactiy: 20,
        }
      ]
    }
  };

  render() {
    return (
      <Vpt state={this.state}/>
    )
  };
}

export default App;
