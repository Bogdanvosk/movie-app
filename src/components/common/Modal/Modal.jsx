import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import useOutsideClick from '../../../hooks/useOutsideClick';

import styles from './Modal.module.scss';
import { useRef } from 'react';

const Modal = ({ isShowing, closeModal, children }) => {
  const modalRef = useRef(null);


  useOutsideClick(modalRef, () => {
    // TODO: close modal
  });

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal} ref={modalRef}>
        {children}
        {/* <div className='body'>
          Click on the close button to close the modal.
        </div>
        <div className='footer'>
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div> */}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

Modal.propTypes = {
  isShowing: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.node,
};
