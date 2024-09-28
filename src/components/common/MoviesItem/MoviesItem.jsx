import PropTypes from 'prop-types';

import useModal from '../../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { updateMovieAction } from '../../../store/features/movies';
import { useNavigate } from 'react-router-dom';

import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import Form from '../Form/Form';
import MovieCover from '../MovieCover/MovieCover';
import FavouriteIcon from '../FavouriteIcon/FavouriteIcon';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  const [isShowingDetails, toggleDetails] = useModal();
  const [isShowingEdit, toggleEdit] = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSetFavourite = (e) => {
    e.stopPropagation();
    dispatch(updateMovieAction({ ...item, isFavourite: !item.isFavourite }));
  };

  const onOpenItem = () => {
    navigate(`/movies/${item.id}`);
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
              <Button
                iconName='edit'
                onClick={toggleEdit}
                className={s.iconBtn}
                onlyIcon
              />
              <Button
                iconName='show'
                onClick={toggleDetails}
                className={s.iconBtn}
                onlyIcon
              />
            </div>
          </div>
          <Typography tag='h3'>{item.name}</Typography>
          <Typography tag='span'>{item.genre}</Typography>
        </div>
      </div>
      
      <Modal
        className={s.detailsModal}
        closeModal={toggleDetails}
        isShowing={isShowingDetails}
      >
        <ItemDetails item={item} />
      </Modal>
      <Modal closeModal={toggleEdit} isShowing={isShowingEdit} isEdit>
        <Form item={item} close={toggleEdit} />
      </Modal>
    </>
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
    cover: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
