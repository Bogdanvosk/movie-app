import PropTypes from 'prop-types';

const Edit = ({ className = '', onClick = () => {} }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      onClick={onClick}
      className={className}
    >
      <g id='Iconly/Light/Edit Square'>
        <g id='Edit Square'>
          <path
            id='Stroke 1'
            d='M11.492 2.789H7.753C4.678 2.789 2.75 4.966 2.75 8.048V16.362C2.75 19.444 4.669 21.621 7.753 21.621H16.577C19.662 21.621 21.581 19.444 21.581 16.362V12.334'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 3'
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8.82666 10.9209L16.2997 3.4479C17.2307 2.5179 18.7397 2.5179 19.6707 3.4479L20.8877 4.6649C21.8187 5.5959 21.8187 7.1059 20.8877 8.0359L13.3787 15.5449C12.9717 15.9519 12.4197 16.1809 11.8437 16.1809H8.09766L8.19166 12.4009C8.20566 11.8449 8.43266 11.3149 8.82666 10.9209Z'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Stroke 5'
            d='M15.1641 4.60249L19.7301 9.16849'
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

export default Edit;

Edit.propTypes = {
  className: PropTypes.string,
};
