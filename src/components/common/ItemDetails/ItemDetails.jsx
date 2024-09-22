import PropTypes from 'prop-types';

import Typography from '../Typography/Typography';
import MovieCover from '../MovieCover/MovieCover';

import s from './ItemDetails.module.scss';

const ItemDetails = ({ item }) => {
  return (
    <div className={s.details}>
      <div className={s.main}>
        <MovieCover cover={item.cover} />
        <div className={s.content}>
          <Typography tag='h3'>{item.name}</Typography>
          <Typography tag='h4'>{item.genre && `Жанр: ${item.genre}`}</Typography>
          <Typography tag='p'>
            {item.year && `Год выпуска: ${item.year}`}
          </Typography>
          <Typography tag='p'>
            {item.duration && `Длительность: ${item.duration} минут`}
          </Typography>
        </div>
      </div>
      <Typography tag='p' className={s.review}>
        {item.review}
      </Typography>
    </div>
  );
};

export default ItemDetails;

ItemDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    review: PropTypes.string,
    cover: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
