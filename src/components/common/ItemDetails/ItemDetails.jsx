import PropTypes from 'prop-types';

import Typography from '../Typography/Typography';
import MovieCover from '../MovieCover/MovieCover';
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';

import s from './ItemDetails.module.scss';

const ItemDetails = ({ item }) => {
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
          <Title name={item.name} year={item.year} className={s.title} />
          <Subtitle genre={item.genre} duration={item.duration} />
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
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    review: PropTypes.string,
    isFavourite: PropTypes.bool,
    cover: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
