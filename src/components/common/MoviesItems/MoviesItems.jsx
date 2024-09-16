import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem/MoviesItem';

import s from './MoviesItems.module.scss';

const MoviesItems = ({ items }) => {
  return (
    <div className={s.movies}>
      {items.map((item, index) => {
        return <MoviesItem key={`${item.id}_${index}`} item={item} />;
      })}
    </div>
  );
};

export default MoviesItems;

MoviesItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string,
      year: PropTypes.string,
      duration: PropTypes.string,
      review: PropTypes.string,
      cover: PropTypes.string,
    })
  ),
};
