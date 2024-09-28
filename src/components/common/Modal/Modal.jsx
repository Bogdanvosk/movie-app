import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { useEffect, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import s from './Modal.module.scss';

const Modal = ({
  isShowing,
  closeModal,
  children,
  className = '',
  isEdit = false,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isShowing ? 'hidden' : 'auto';
  }, [isShowing]);

  const onCloseModal = (e) => {
    const target = e.target.closest('button') || e.target;
    target.type !== 'button' && closeModal(e);
    isEdit && window.localStorage.removeItem('form');
  };

  useOutsideClick(modalRef, onCloseModal);

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <div className={s.wrapper}>
      <div className={cn(s.modal, className)} ref={modalRef}>
        {children}
        <span className={s.delete} onClick={onCloseModal}></span>
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
