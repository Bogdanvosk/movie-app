import Icon from '../Icon/Icon';

import s from './MovieCover.module.scss';

const MovieCover = ({ cover }) => {
  return cover ? (
    <img className={s.cover} src={cover.src} alt='Cover' />
  ) : (
    <div className={s.iconWrapper}>
      <Icon name='movie' className={s.movieIcon} />
    </div>
  );
};

export default MovieCover;
