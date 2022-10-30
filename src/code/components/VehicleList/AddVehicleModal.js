import React, { useState } from 'react';
import Modal from '../common/Modal';

function AddVehicleModal() {
  const footer = () => {
    return (
      <>
        <button type='button' className='btn btn-primary'>
          Save changes
        </button>
      </>
    );
  };

  const content = () => {
    return (
      <>
        <div class='mb-3'>
          <label className='form-label'>Vehicle Name</label>
          <input type='text' name='name' className='form-control' autoComplete='off' />
        </div>
        <div class='mb-3'>
          <label className='form-label'>Vehicle Id</label>
          <input type='text' name='route' className='form-control' autoComplete='off' />
        </div>
      </>
    );
  };

  return <Modal title='Add New Vehicle' footer={footer()} content={content()} />;
}

export default AddVehicleModal;
