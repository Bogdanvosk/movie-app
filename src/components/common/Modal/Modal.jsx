import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import s from './Modal.module.scss';

const Modal = ({ isShowing, closeModal, children }) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, (e) => {
    e.target.type !== 'button' && closeModal();
  });

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} ref={modalRef}>
        {children}
        {/* <div className='body'>
          Click on the close button to close the modal.
        </div>*/}
        <span className={s.delete} onClick={closeModal}></span>
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
