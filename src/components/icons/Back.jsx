import PropTypes from 'prop-types';

const Back = ({ className = '' }) => {
  return (
    <svg
      width='20'
      height='16'
      viewBox='0 0 20 16'
      fill='none'
      className={className}
    >
      <path
        d='M8 15L1 8M1 8L8 1M1 8L19 8'
        stroke='currentColor'
        strokeWidth='2'
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
