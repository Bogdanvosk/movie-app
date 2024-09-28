import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './MovieCover.module.scss';

const MovieCover = ({ cover, className = '' }) => {
  return <img className={cn(s.cover, className)} src={cover?.src} alt='Cover' />;
};

export default MovieCover;

MovieCover.propTypes = {
  cover: PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
  }),
  className: PropTypes.string,
};
