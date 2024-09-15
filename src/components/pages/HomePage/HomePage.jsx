import useModal from '../../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../../../store/features/movies';
import { selectAllMovies } from '../../../store/features/movies/selectors';

import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import Form from '../../common/Form/Form';
import Container from '../../common/Container/Container';
import Modal from '../../common/Modal/Modal';
import MoviesItems from '../../common/MoviesItems/MoviesItems';

const HomePage = () => {
  const [isShowingModal, open, close] = useModal();
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <>
      <Typography tag='h1'>Movie app</Typography>
      <Container>
        <Button onClick={open}>Добавить фильм</Button>
        <Modal closeModal={close} isShowing={isShowingModal}>
          <Form close={close} />
        </Modal>
        <MoviesItems items={allMovies} />
      </Container>
    </>
  );
};

export default HomePage;
