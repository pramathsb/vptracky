import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal(props) {
  const [visiblity, setVisiblity] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { title, content, footer, closeModal } = props;

  const enableModal = () => {
    setVisiblity(true);
    setTimeout(() => {
      setShowModal(true);
    }, 1);
  };

  const disableModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setVisiblity(false);
    }, 150);
  };

  const modalContent = () => {
    return createPortal(
      <>
        <div className={`modal fade ${showModal ? 'show' : ''}`}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>{title || 'Modal title'}</h5>
                <button type='button' className='btn-close' onClick={disableModal}></button>
              </div>
              <div className='modal-body'>{content || <p>Modal body text goes here.</p>}</div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={disableModal}>
                  Close
                </button>
                {footer}
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`}></div>
      </>,
      document.getElementById('modal-root')
    );
  };

  return (
    <>
      {visiblity && modalContent()}
      <button onClick={enableModal} className='btn btn-info me-2'>
        Add New Vehicles
      </button>
    </>
  );
}

export default Modal;
