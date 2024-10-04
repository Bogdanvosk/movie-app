import {
  addMovieAction,
  deleteMovieAction,
  fetchMovieAction,
  fetchMoviesAction,
  searchMoviesAction,
  updateMovieAction,
} from './store/features/movies';

export const MOVIES_ROUTE = `/movies`;

export const FETCH_MOVIES_TYPE = fetchMoviesAction.type;
export const ADD_MOVIE_TYPE = addMovieAction.type;
export const UPDATE_MOVIE_TYPE = updateMovieAction.type;
export const DELETE_MOVIE_TYPE = deleteMovieAction.type;
export const SEARCH_MOVIE_TYPE = searchMoviesAction.type;
export const FETCH_SINGLE_MOVIE_TYPE = fetchMovieAction.type;

export const formInputs = [
  {
    title: 'Название',
    fieldName: 'name',
    type: 'text',
    placeholder: 'Введите название',
  },
  {
    title: 'Жанр',
    fieldName: 'genre',
    type: 'text',
    placeholder: 'Введите жанр',
  },
  {
    title: 'Год выпуска',
    fieldName: 'year',
    type: 'number',
    placeholder: 'Введите год выпуска',
  },
  {
    title: 'Длительность',
    fieldName: 'duration',
    type: 'number',
    placeholder: 'Длительность в минутах',
  },
  {
    title: 'Рецензия',
    fieldName: 'review',
    type: null,
    placeholder: null,
  },
];
