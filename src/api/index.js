import { instance } from './instance';

import { MOVIES_ROUTE } from '../constants';

export const fetchMoviesReq = async () => {
  const { data } = await instance
    .get(MOVIES_ROUTE)
    .catch((err) => console.log(err));
  return data;
};

export const addMovieReq = async (movie) => {
  const { data } = await instance
    .post(MOVIES_ROUTE, movie)
    .catch((err) => console.log(err));
  return data;
};
