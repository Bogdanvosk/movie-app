import useModal from '../../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../../../store/features/movies';

import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import Form from '../../common/Form/Form';
import Container from '../../common/Container/Container';
import Modal from '../../common/Modal/Modal';

const HomePage = () => {
  const [isShowingModal, open, close] = useModal();
  const dispatch = useDispatch();

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
      </Container>
    </>
  );
};

export default HomePage;
