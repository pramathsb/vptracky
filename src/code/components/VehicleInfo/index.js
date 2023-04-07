import axios from 'axios';
import React from 'react';
import Tabs from '../common/Tabs';
import { useParams } from 'react-router-dom';
import FuelTable from './FuelTable';

function VehicleInfo(props) {
  const { dispatch, store } = props,
    { vehicleId } = useParams();
  const vehicle = (store?.vehicleId && store?.vehicleId[vehicleId]) || false;
  const { dashBoardData, fuelData } = vehicle;
  const { TXT } = store;

  const dashboard = {
    totalFuel: 0,
    odo: 0,
    totalFuelPrice: 0,
    minFullTankDistance: 1000,
    maxFullTankDistance: 0,
    avgFullTankDistance: [],
  };

  const modifiedfuelData =
    fuelData &&
    fuelData.map((data, i) => {
      // Distance
      const curOdo = fuelData[i].odo;
      const prevOdo = () => fuelData[i - 1].odo;
      const trip = i > 0 ? curOdo - prevOdo() : 'NA';

      // Mileage
      const prevFulltank = () => fuelData[i - 1].fullTank;
      const curFulltank = () => fuelData[i].fullTank;
      const prevFuelFillQty = () => fuelData[i - 1].qtyLtrs;
      const mileage = i > 0 && prevFulltank() ? (trip / prevFuelFillQty()).toFixed(2) : 'NA';

      // Odo
      dashboard.odo = curOdo;
      dashboard.totalFuel += data.qtyLtrs;
      dashboard.totalFuelPrice += data.qtyRs;
      dashboard.minFullTankDistance =
        i > 0 && prevFulltank() && curFulltank() && trip < dashboard.minFullTankDistance
          ? trip
          : dashboard.minFullTankDistance;
      dashboard.maxFullTankDistance =
        i > 0 && prevFulltank() && curFulltank() && trip > dashboard.maxFullTankDistance
          ? trip
          : dashboard.maxFullTankDistance;
      i > 0 && prevFulltank() && curFulltank() && dashboard.avgFullTankDistance.push(trip);

      return { ...data, trip, mileage };
    });

  const renderDashboard = () => {
    return (
      <div className='row flex-wrap g-0 dashboard p-4 mb-4'>
        <div className='col-4 p-2'>
          {TXT.dashboard.type}: {dashBoardData.type}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.brand}: {dashBoardData.brand}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.model}: {dashBoardData.model}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.fuelType}: {dashBoardData.fuelType}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.fuelCapacity}: {dashBoardData.fuelCapacity}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.dateOfPurchase}: {dashBoardData.dateOfPurchase}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.age}: {dashBoardData.age}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.ratedMileage}: {dashBoardData.ratedMileage}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.insuranceRenewalDate}: {dashBoardData.insuranceRenewalDate}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.nextServiceDate}: {dashBoardData.nextServiceDate}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.nextServiceKm}: {dashBoardData.nextServiceKm}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.distanceTraveled}: {dashboard.odo}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalFuelConsumedLtrs}: {dashboard.totalFuel.toFixed(2)}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalFuelConsumedCost}: {dashboard.totalFuelPrice.toFixed(2)}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalAverageMileage}: {(dashboard.odo / dashboard.totalFuel).toFixed(2)}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.costPerKm}: {(dashboard.totalFuelPrice / dashboard.odo).toFixed(2)}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.model}: {dashBoardData.model}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.minDistOnFullTank}: {dashboard.minFullTankDistance}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.maxDistOnFullTank}: {dashboard.maxFullTankDistance}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.avgDistOnFullTank}:{' '}
          {(
            dashboard.avgFullTankDistance.reduce((prev, curr) => prev + curr) /
            dashboard.avgFullTankDistance.length
          ).toFixed(2)}
        </div>
      </div>
    );
  };

  const tabs = {
    dynamic: [
      {
        route: 'dashboard',
        tabName: 'Dashboard',
        component: dashBoardData && renderDashboard(),
      },
      {
        route: 'fuel',
        tabName: 'Fuel',
        component: fuelData && <FuelTable modifiedfuelData={modifiedfuelData} TXT={TXT} />,
      },
      {
        route: 'service',
        tabName: 'Service',
        component: 'text-3',
      },
    ],
  };

  React.useEffect(() => {
    (async () => {
      if (!store?.vehicleId) {
        dispatch({ type: 'SHOW_LOADER' });
        await axios.get('/api/vehicleList.json').then(({ data }) => {
          console.debug('API: Vehicle Details');
          if (Object.keys(data).includes(vehicleId)) {
            dispatch({ type: 'SELECT_VEHICLE', payload: data });
            console.debug('VAR:', data);
          } else {
            window.history.go('-1');
          }
        });
        dispatch({ type: 'HIDE_LOADER' });
      }
    })();
  }, [dispatch, store?.vehicleId, vehicleId]);

  return (
    <>
      <h2 className='my-4'>{vehicle.name}</h2>
      <Tabs tabs={tabs} />
    </>
  );
}

export default VehicleInfo;
