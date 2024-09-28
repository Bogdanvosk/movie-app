import PropTypes from 'prop-types';

const Show = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <g id='Iconly/Light/Document'>
        <g id='Document'>
          <path
            id='Stroke 1'
            d='M15.7161 16.2234H8.49609'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 2'
            d='M15.7161 12.0369H8.49609'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            d='M11.2511 7.86011H8.49609'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 4'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.908 2.7498C15.908 2.7498 8.231 2.7538 8.219 2.7538C5.459 2.7708 3.75 4.5868 3.75 7.3568V16.5528C3.75 19.3368 5.472 21.1598 8.256 21.1598C8.256 21.1598 15.932 21.1568 15.945 21.1568C18.705 21.1398 20.415 19.3228 20.415 16.5528V7.3568C20.415 4.5728 18.692 2.7498 15.908 2.7498Z'
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

export default Show;

Show.propTypes = {
  className: PropTypes.string,
};