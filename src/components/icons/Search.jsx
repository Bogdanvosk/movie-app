import PropTypes from 'prop-types';

const Search = ({ className = '' }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
    >
      <g id='Iconly/Light/Search'>
        <g id='Search'>
          <circle
            id='Ellipse_739'
            cx='11.7659'
            cy='11.7666'
            r='8.98856'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Line_181'
            d='M18.0176 18.4851L21.5416 22'
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

export default Search;

Search.propTypes = {
  className: PropTypes.string,
};