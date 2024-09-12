import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const Modal = ({ show, onCloseButtonClick, children }) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.modal}>
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
  show: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  children: PropTypes.node,
};
