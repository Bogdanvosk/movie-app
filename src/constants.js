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
