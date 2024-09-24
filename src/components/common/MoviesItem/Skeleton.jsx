import Skeleton from 'react-loading-skeleton';
import cn from 'classnames';

import s from './MoviesItem.module.scss';

const Box = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
}

const MoviesItemSkeleton = () => {
  return (
    <div className={cn(s.movie, s.movieSkeleton)}>
      <Box className={s.coverSkeletonWrapper}>
        <Skeleton className={s.coverSkeleton} />
      </Box>
      <div className={cn(s.content, s.contentSkeleton)}>
        <Box className={s.rowSkeletonWrapper}>
          <Skeleton className={s.rowSkeleton} />
        </Box>
        <Box className={s.rowSkeletonWrapper}>
          <Skeleton className={s.rowSkeleton} />
        </Box>
        <Box className={s.rowSkeletonWrapper}>
          <Skeleton className={s.rowSkeleton} />
        </Box>
      </div>
    </div>
  );
};

export default MoviesItemSkeleton;
