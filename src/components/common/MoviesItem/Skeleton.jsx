import cn from 'classnames';

import s from './MoviesItem.module.scss';

const MoviesItemSkeleton = () => {
  return (
    <div className={cn(s.movie, s.movieSkeleton)}>
      <div className={s.coverSkeleton} />

      <div className={cn(s.content, s.contentSkeleton)}>
        <div className={s.rowSkeleton} />
        <div className={s.rowSkeleton} />
        <div className={s.rowSkeleton} />
      </div>
    </div>
  );
};

export default MoviesItemSkeleton;
