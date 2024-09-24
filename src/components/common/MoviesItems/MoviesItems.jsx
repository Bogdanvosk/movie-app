import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../store/features/movies/selectors';

import MoviesItem from '../MoviesItem/MoviesItem';
import MoviesItemSkeleton from '../MoviesItem/Skeleton';

import s from './MoviesItems.module.scss';

const MoviesItems = ({ items }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={s.movies}>
      {isLoading &&
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
