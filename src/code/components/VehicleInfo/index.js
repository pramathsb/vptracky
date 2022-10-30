import axios from 'axios';
import React from 'react';
import Tabs from '../common/Tabs';
import { useParams } from 'react-router-dom';

function VehicleInfo(props) {
  const { dispatch, store } = props,
    { vehicleId } = useParams();
  console.log(useParams());
  const { TXT } = store;

  const renderDashboard = () => {
    return (
      <div className='row flex-wrap g-0 dashboard p-4 mb-4'>
        <div className='col-4 p-2'>{TXT.dashboard.type}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.brand}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.model}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.fuelType}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.fuelCapacity}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.dateOfPurchase}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.age}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.ratedMileage}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.insauranceRenewalDate}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.nextServiceDate}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.nextServiceKm}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.distanceTravelled}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.totalFuelConsumedLtrs}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.totalFuelConsumedCost}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.totalAverageMileage}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.costPerKm}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.model}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.minDistOnFullTank}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.maxDistOnFullTank}: N/A</div>
        <div className='col-4 p-2'>{TXT.dashboard.avgDistOnFullTank}: N/A</div>
      </div>
    );
  };

  const renderFuelTable = () => {
    return (
      <table className='table table-bordered'>
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
    );
  };

  const tabs = {
    dynamic: [
      {
        route: 'dashboard',
        tabName: 'Dashboard',
        component: renderDashboard(),
      },
      {
        route: 'fuel',
        tabName: 'Fuel',
        component: renderFuelTable(),
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
  }, []);

  return (
    <>
      <h2 className='my-4'>{vehicleId}</h2>
      <Tabs tabs={tabs} />
    </>
  );
}

export default VehicleInfo;
