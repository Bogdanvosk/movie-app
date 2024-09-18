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

export const updateMovieReq = async (movie) => {
  const { data } = await instance
    .put(`${MOVIES_ROUTE}/${movie.id}`, movie)
    .catch((err) => console.log(err));
  return data;
};

export const deleteMovieReq = async (id) => {
  await instance
    .delete(`${MOVIES_ROUTE}/${id}`)
    .catch((err) => console.log(err));
  return id;
};
