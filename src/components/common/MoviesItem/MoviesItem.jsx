import PropTypes from 'prop-types';

import useModal from '../../../hooks/useModal';

import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  const [isShowingModal, toggle] = useModal();

  return (
    <div className={s.movie}>
      <img className={s.cover} src={item.cover} alt='Cover of movie' />
      <div className={s.content}>
        <div className={s.buttons}>
          <Button onClick={toggle} iconName='show' type='button' />
        </div>
        <Modal closeModal={toggle} isShowing={isShowingModal}>
          <ItemDetails item={item} />
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
    cover: PropTypes.string,
  }),
};
