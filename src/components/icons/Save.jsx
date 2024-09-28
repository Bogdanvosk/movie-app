import PropTypes from 'prop-types';

const Save = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <g id='Iconly/Light/Paper Plus'>
        <g id='Paper Plus'>
          <path
            id='Stroke 1'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M14.7366 2.7619H8.08455C6.00455 2.7539 4.29955 4.4109 4.25055 6.4909V17.3399C4.21555 19.3899 5.84855 21.0809 7.89955 21.1169C7.96055 21.1169 8.02255 21.1169 8.08455 21.1149H16.0726C18.1416 21.0939 19.8056 19.4089 19.8026 17.3399V8.0399L14.7366 2.7619Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            d='M14.4746 2.7501V5.6591C14.4746 7.0791 15.6236 8.2301 17.0436 8.2341H19.7976'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 5'
            d='M14.2945 12.9142H9.39453'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 7'
            d='M11.8438 15.3639V10.4639'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export default Save;

Save.propTypes = {
  className: PropTypes.string,
};