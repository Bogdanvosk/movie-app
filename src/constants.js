import {
  addMovie,
  deleteMovie,
  fetchMovies,
  updateMovie,
} from './store/features/movies';

export const MOVIES_ROUTE = `/movies`;

export const FETCH_MOVIES_TYPE = fetchMovies.type;
export const ADD_MOVIE_TYPE = addMovie.type;
export const UPDATE_MOVIE_TYPE = updateMovie.type;
export const DELETE_MOVIE_TYPE = deleteMovie.type;
