import PropTypes from 'prop-types';

import MoviesItem from '../MoviesItem/MoviesItem';
import MoviesItemSkeleton from '../MoviesItem/Skeleton';

import s from './MoviesItems.module.scss';

const MoviesItems = ({ items }) => {
  return (
    <div className={s.movies}>
      {items.length === 0 &&
        Array.from({ length: 8 }).map((_, index) => (
          <MoviesItemSkeleton key={`skeleton_${index}`} />
        ))}

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
      cover: PropTypes.shape({
        src: PropTypes.string,
        name: PropTypes.string,
      }),
    })
  ),
};
