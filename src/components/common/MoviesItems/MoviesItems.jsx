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
