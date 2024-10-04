import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cn from 'classnames';

import { useModalContext } from '../ModalPovider/ModalPovider';
import { useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

import s from './Modal.module.scss';

const Modal = ({ children, isEdit, className = '' }) => {
  const { hideModal } = useModalContext();
  const modalRef = useRef(null);

  const onCloseModal = (e) => {
    const target = e.target.closest('button') || e.target;
    target.type !== 'button' && hideModal();
    isEdit && window.localStorage.removeItem('form');
  };

  useOutsideClick(modalRef, onCloseModal);

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
  className: PropTypes.string,
  isEdit: PropTypes.bool,
};
