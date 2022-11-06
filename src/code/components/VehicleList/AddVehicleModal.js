import React, { useState } from 'react';
import Modal from '../common/Modal';

function AddVehicleModal(props) {
  const { dispatch, store } = props;
  const { TXT } = store;
  const footer = () => {
    return (
      <>
        <button type='button' className='btn btn-primary'>
          {TXT.cta.saveChanges}
        </button>
      </>
    );
  };

  const content = () => {
    return (
      <>
        <div class='mb-3'>
          <label className='form-label'>{TXT.forms.vehicleName}</label>
          <input type='text' name='name' className='form-control' autoComplete='off' />
        </div>
        <div class='mb-3'>
          <label className='form-label'>{TXT.forms.vehicleId}</label>
          <input type='text' name='route' className='form-control' autoComplete='off' />
        </div>
      </>
    );
  };

  return (
    <Modal
      title={TXT.cta.addNewVehicle}
      footer={footer()}
      content={content()}
      store={store}
      dispatch={dispatch}
    />
  );
}

export default AddVehicleModal;
