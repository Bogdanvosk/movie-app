import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import s from './Modal.module.scss';

const Modal = ({ isShowing, closeModal, children }) => {
  const modalRef = useRef(null);

  useOutsideClick(modalRef, (e) => {
    const target = e.target.closest('button') || e.target;

    target.type !== 'button' && closeModal();
  });

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} ref={modalRef}>
        {children}
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
