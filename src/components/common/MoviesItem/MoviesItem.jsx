import PropTypes from 'prop-types';

import useModal from '../../../hooks/useModal';

import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import Form from '../Form/Form';
import MovieCover from '../MovieCover/MovieCover';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  const [isShowingDetails, toggleDetails] = useModal();
  const [isShowingEdit, toggleEdit] = useModal();

  return (
    <div className={s.movie}>
      <MovieCover cover={item.cover} />
      <div className={s.content}>
        <div className={s.buttons}>
          <Button onClick={toggleEdit} iconName='edit' type='button' />
          <Button onClick={toggleDetails} iconName='show' type='button' />
        </div>
        <Modal closeModal={toggleDetails} isShowing={isShowingDetails}>
          <ItemDetails item={item} />
        </Modal>
        <Modal closeModal={toggleEdit} isShowing={isShowingEdit} isEdit>
          <Form item={item} close={toggleEdit} />
        </Modal>
        <Typography tag='h3'>{item.name}</Typography>
        <Typography tag='h4'>Жанр: {item.genre}</Typography>
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
    cover: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
