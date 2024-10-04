import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useModalContext } from '../../common/ModalPovider/ModalPovider';
import { fetchMoviesAction } from '../../../store/features/movies';
import { selectAllMovies } from '../../../store/features/movies/selectors';

import Typography from '../../common/Typography/Typography';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import MoviesItems from '../../common/MoviesItems/MoviesItems';
import SearchInput from '../../common/SearchInput/SearchInput';

const HomePage = () => {
  const { showModal } = useModalContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const allMovies = useSelector(selectAllMovies);

  useEffect(() => {
    const searchValParam = searchParams.get('search');

    !searchValParam && dispatch(fetchMoviesAction());
  }, [dispatch, searchParams]);

  const onShowModal = () => {
    showModal('add', {});
  };

  return (
    <>
      <Typography tag='h1'>Movie app</Typography>
      <Container>
        <SearchInput />
        <Button iconName='plus' onClick={onShowModal}>
          Добавить фильм
        </Button>
        <MoviesItems items={allMovies} />
      </Container>
    </>
  );
};

export default HomePage;
