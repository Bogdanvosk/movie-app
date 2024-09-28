import PropTypes from 'prop-types';
import cn from 'classnames';

import Typography from '../Typography/Typography';

import s from './Subtitle.module.scss';

const Subtitle = ({ genre, duration, className = '' }) => {
  const setDuration = (mins) => {
    const hours = Math.floor(+mins / 60);
    const minutes = +mins % 60;
    if (hours === 0) return `${minutes}м`;

    return `${hours}ч ${minutes}м`;
  };

  return (
    <Typography tag='h4' className={cn(s.subtitle, className)}>
      {genre}
      <span className={s.dot}></span>
      {setDuration(duration)}
    </Typography>
  );
};

export default Subtitle;

Subtitle.propTypes = {
  genre: PropTypes.string,
  duration: PropTypes.string,
  className: PropTypes.string,
};
