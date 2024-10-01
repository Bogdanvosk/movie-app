import Container from '../../common/Container/Container';

import s from './MovieItem.module.scss';

const Skeleton = () => {
  return (
    <div className={s.item}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.coverSkeleton} />
          <div className={s.content}>
            <div className={s.titleSkeleton} />
            <div className={s.subtitleSkeleton} />
            <div className={s.reviewSkeleton} />
            <div className={s.paragraphSkeleton} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skeleton;
