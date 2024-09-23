import PropTypes from 'prop-types';

import Typography from '../Typography/Typography';
import MovieCover from '../MovieCover/MovieCover';
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';

import s from './ItemDetails.module.scss';

const ItemDetails = ({ item }) => {
  const setDuration = (mins) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    if (hours === 0) return `${minutes}м`;

    return `${hours}ч ${minutes}м`;
  };

  return (
    <div className={s.details}>
      <div className={s.main}>
        <div className={s.coverWrapper}>
          <MovieCover className={s.cover} cover={item.cover} />
          <FavouriteIcon
            isFavourite={item.isFavourite}
            className={s.favourite}
          />
        </div>
        <div className={s.content}>
          <div className={s.title}>
            <Typography tag='h3' className={s.name}>
              {item.name} <span className={s.year}>({item.year})</span>
            </Typography>
          </div>
          <div>
            <Typography tag='h4' className={s.subtitle}>
              {item.genre}
              <span className={s.dot}></span>
              {setDuration(item.duration)}
            </Typography>
          </div>
          {/* <Typography tag='h4'>
            {item.genre && `Жанр: ${item.genre}`}
          </Typography>

          <Typography tag='p'>
            {item.duration && `Длительность: ${item.duration} минут`}
          </Typography> */}
          <Typography tag='p' className={s.review}>
            {item.review}
          </Typography>
        </div>
      </div>
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
