import cn from 'classnames';

import Icon from '../Icon/Icon';

import s from './MovieCover.module.scss';

const MovieCover = ({ cover, className = '' }) => {
  return cover ? (
    <img className={cn(s.cover, className)} src={cover.src} alt='Cover' />
  ) : (
    <div className={s.default}></div>
  );
};

export default MovieCover;
