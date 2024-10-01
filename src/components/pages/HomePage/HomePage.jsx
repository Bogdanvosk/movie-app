import useModal from '../../../hooks/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesAction } from '../../../store/features/movies';
import { selectAllMovies } from '../../../store/features/movies/selectors';

import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import Form from '../../common/Form/Form';
import Container from '../../common/Container/Container';
import Modal from '../../common/Modal/Modal';
import MoviesItems from '../../common/MoviesItems/MoviesItems';
import SearchInput from '../../common/SearchInput/SearchInput';

const HomePage = () => {
  const [isShowingModal, toggle] = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMovies);

  useEffect(() => {
    const searchValParam = searchParams.get('search');

    !searchValParam && dispatch(fetchMoviesAction());
  }, [dispatch, searchParams]);

  return (
    <>
      <Typography tag='h1'>Movie app</Typography>
      <Container>
        <SearchInput />
        <Button iconName='plus' onClick={toggle}>
          Добавить фильм
        </Button>
        <Modal closeModal={toggle} isShowing={isShowingModal}>
          <Form close={toggle} />
        </Modal>
        <MoviesItems items={allMovies} />
      </Container>
    </>
  );
};

export default HomePage;
