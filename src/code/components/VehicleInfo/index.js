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
          {TXT.dashboard.distanceTraveled}: {dashBoardData.distanceTraveled}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalFuelConsumedLtrs}: {dashBoardData.totalFuelConsumedLtrs}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalFuelConsumedCost}: {dashBoardData.totalFuelConsumedCost}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.totalAverageMileage}: {dashBoardData.totalAverageMileage}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.costPerKm}: {dashBoardData.costPerKm}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.model}: {dashBoardData.model}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.minDistOnFullTank}: {dashBoardData.minDistOnFullTank}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.maxDistOnFullTank}: {dashBoardData.maxDistOnFullTank}
        </div>
        <div className='col-4 p-2'>
          {TXT.dashboard.avgDistOnFullTank}: {dashBoardData.avgDistOnFullTank}
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
        component: fuelData && <FuelTable fuelData={fuelData} TXT={TXT} />,
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
