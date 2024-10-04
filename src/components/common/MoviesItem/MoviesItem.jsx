import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { updateMovieAction } from '../../../store/features/movies';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../ModalPovider/ModalPovider';

import Typography from '../Typography/Typography';
import MovieCover from '../MovieCover/MovieCover';
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';
import Icon from '../Icon/Icon';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  const { showModal } = useModalContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSetFavourite = (e) => {
    e.stopPropagation();
    dispatch(updateMovieAction({ ...item, isFavourite: !item.isFavourite }));
  };

  const onOpenItem = () => {
    navigate(`/movies/${item.id}`);
  };

  const handleClickModal = (e, type) => {
    e.stopPropagation();
    showModal(type, { item });
  };

  return (
    <>
      <div className={s.movie} onClick={onOpenItem}>
        <FavouriteIcon
          isFavourite={item.isFavourite}
          onSetFavourite={onSetFavourite}
        />
        <MovieCover cover={item.cover} />
        <div className={s.content}>
          <div className={s.firstRow}>
            <Typography tag='span' className={s.year}>
              {item.year}
            </Typography>
            <div className={s.buttons}>
              <div
                className={s.iconBtn}
                onClick={(e) => handleClickModal(e, 'edit')}
              >
                <Icon name='edit' />
              </div>
              <div
                className={s.iconBtn}
                onClick={(e) => handleClickModal(e, 'details')}
              >
                <Icon name='show' />
              </div>
            </div>
          </div>
          <Typography tag='h3'>{item.name}</Typography>
          <Typography tag='span'>{item.genre}</Typography>
        </div>
      </div>
    </>
  );
};

export default MoviesItem;

MoviesItem.propTypes = {
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
