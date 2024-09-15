import Typography from '../Typography/Typography';

import s from './MoviesItem.module.scss';

const MoviesItem = ({ item }) => {
  return (
    <div className={s.movie}>
      {/* <div className={s.cover}> */}
      <img className={s.cover} src={item.cover} alt='Cover of movie' />
      {/* </div> */}
      <div className={s.content}>
        <Typography className={s.name} tag='h3'>
          {item.name}
        </Typography>
        <Typography className={s.genre} tag='h4'>
          Жанр: {item.genre}
        </Typography>
        <Typography className={s.year} tag='p'>
          Год выпуска: {item.year}
        </Typography>
        <Typography className={s.duration} tag='p'>
          Длительность: {item.duration}
        </Typography>
        <Typography className={s.review} tag='p'>
          {item.review}
        </Typography>
      </div>
    </div>
  );
};

export default MoviesItem;
