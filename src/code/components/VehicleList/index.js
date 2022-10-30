import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddVehicleModal from './AddVehicleModal';

function VehicleList(props) {
  const { dispatch, store } = props;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!store?.vehicleList) {
        dispatch({ type: 'SHOW_LOADER' });
        await axios.get('/api/vehicleList.json').then(({ data }) => {
          console.debug('API: Vehicle List');
          dispatch({ type: 'UPDATE_VEHICLE_LIST', payload: data });
        });
        dispatch({ type: 'HIDE_LOADER' });
      }
    })();
  }, []);

  const renderVehicles = () => {
    const vehicleList = Object.values(store?.vehicleList);
    return vehicleList.map((vehicle) => {
      return (
        <button
          key={vehicle.name}
          type='button'
          className='btn btn-primary me-2'
          onClick={() => navigate(vehicle.route + '/dashboard')}
        >
          {vehicle.name}
        </button>
      );
    });
  };

  return (
    <>
      {store?.vehicleList && renderVehicles()}
      <AddVehicleModal />
    </>
  );
}

export default VehicleList;
