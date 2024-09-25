import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { addMovie, deleteMovie, fetchMovies, updateMovie } from '.';
import {
  addMovieReq,
  fetchMoviesReq,
  updateMovieReq,
  deleteMovieReq,
  searchMovieReq,
} from '../../../api';
import {
  ADD_MOVIE_TYPE,
  FETCH_MOVIES_TYPE,
  UPDATE_MOVIE_TYPE,
  DELETE_MOVIE_TYPE,
  SEARCH_MOVIE_TYPE,
} from '../../../constants';

function* rootSaga() {
  yield all([fork(moviesSagaWatcher)]);
}

function* moviesSagaWatcher() {
  yield takeLatest(FETCH_MOVIES_TYPE, fetchMoviesWorker);
  yield takeLatest(ADD_MOVIE_TYPE, addMovieWorker);
  yield takeLatest(UPDATE_MOVIE_TYPE, updateMovieWorker);
  yield takeLatest(DELETE_MOVIE_TYPE, deleteMovieWorker);
  yield takeLatest(SEARCH_MOVIE_TYPE, searchMoviesWorker);
}

function* fetchMoviesWorker() {
  const data = yield call(fetchMoviesReq);

  yield put(fetchMovies(data));
}

function* addMovieWorker({ payload }) {
  const data = yield call(addMovieReq, payload);

  yield put(addMovie(data));
}

function* updateMovieWorker({ payload }) {
  const data = yield call(updateMovieReq, payload);

  yield put(updateMovie(data));
}

function* deleteMovieWorker({ payload }) {
  const id = yield call(deleteMovieReq, payload);

  yield put(deleteMovie(id));
}

function* searchMoviesWorker({ payload }) {
  const data = yield call(searchMovieReq, payload);

  yield put(fetchMovies(data));
}

export default rootSaga;
