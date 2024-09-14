import { addMovie, fetchMovies } from './store/features/movies';

export const MOVIES_ROUTE = `/movies`;

export const FETCH_MOVIES_TYPE = fetchMovies.type;
export const ADD_MOVIE_TYPE = addMovie.type;
