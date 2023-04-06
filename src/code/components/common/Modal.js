import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function Modal(props) {
  const [visibility, setVisibility] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { title, content, footer, closeModal, store } = props;

  const { TXT } = store;

  const enableModal = () => {
    setVisibility(true);
    setTimeout(() => {
      setShowModal(true);
    }, 1);
  };

  const disableModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setVisibility(false);
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
                  {TXT.cta.close}
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
      {visibility && modalContent()}
      <button onClick={enableModal} className='btn btn-info me-2'>
        {TXT.cta.addNewVehicle}
      </button>
    </>
  );
}

export default Modal;
