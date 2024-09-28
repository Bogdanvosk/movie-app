import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovieAction } from '../../../store/features/movies';
import { selectCurrentMovie } from '../../../store/features/movies/selectors';

import Container from '../../common/Container/Container';
import Title from '../../common/Title/Title';
import MovieCover from '../../common/MovieCover/MovieCover';
import Subtitle from '../../common/Subtitle/Subtitle';
import Typography from '../../common/Typography/Typography';
import FavouriteIcon from '../../common/FavouriteIcon/FavouriteIcon';
import Icon from '../../common/Icon/Icon';

import s from './MovieItem.module.scss';

const MovieItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectCurrentMovie);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovieAction(id));
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={s.item}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.coverWrapper}>
            <MovieCover cover={movie.cover} className={s.cover} />
            <FavouriteIcon
              className={s.favourite}
              isFavourite={movie.isFavourite}
            />
          </div>
          <div className={s.content}>
            <Title name={movie.name} year={movie.year} />
            <Subtitle
              genre={movie.genre}
              duration={movie.duration}
              className={s.subtitle}
            />
            <div className={s.review}>
              <span>Рецензия</span>
              <Typography tag='p' className={s.reviewText}>
                {movie.review}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <div className={s.back} onClick={handleBackClick}>
        <Icon name='back' className={s.backIcon} />
      </div>
    </div>
  );
};

export default MovieItem;
