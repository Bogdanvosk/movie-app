import PropTypes from 'prop-types';

const Back = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.75 7.66589L2.75 16.3349C2.75 19.3549 4.889 21.2499 7.916 21.2499L16.084 21.2499C19.111 21.2499 21.25 19.3649 21.25 16.3349L21.25 7.66589C21.25 4.63589 19.111 2.74989 16.084 2.74989L7.916 2.74989C4.889 2.74989 2.75 4.63589 2.75 7.66589Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.91394 11.9999L16.0859 11.9999'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.6777 15.7479L7.91373 11.9999L11.6777 8.25189'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Back;

Back.propTypes = {
  className: PropTypes.string,
};
