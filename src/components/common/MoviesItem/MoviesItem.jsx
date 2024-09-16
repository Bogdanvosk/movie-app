import PropTypes from 'prop-types';

import Typography from '../Typography/Typography';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  return (
    <div className={s.movie}>
      <img className={s.cover} src={item.cover} alt='Cover of movie' />
      <div className={s.content}>
        <Typography className={s.name} tag='h3'>
          {item.name}
        </Typography>
        <Typography tag='h4'>Жанр: {item.genre}</Typography>
        <Typography tag='p'>Год выпуска: {item.year}</Typography>
        <Typography tag='p'>Длительность: {item.duration} минут</Typography>
        <Typography className={s.review} tag='p'>
          {item.review}
        </Typography>
      </div>
    </div>
  );
};

export default MoviesItem;

MoviesItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    review: PropTypes.string,
    cover: PropTypes.string,
  }),
};
