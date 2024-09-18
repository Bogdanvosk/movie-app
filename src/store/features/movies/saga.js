import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import { addMovie, deleteMovie, setMovies, updateMovie } from '.';
import {
  addMovieReq,
  fetchMoviesReq,
  updateMovieReq,
  deleteMovieReq,
} from '../../../api';
import {
  ADD_MOVIE_TYPE,
  FETCH_MOVIES_TYPE,
  UPDATE_MOVIE_TYPE,
  DELETE_MOVIE_TYPE,
} from '../../../constants';

function* rootSaga() {
  yield all([fork(moviesSagaWatcher)]);
}

function* moviesSagaWatcher() {
  yield takeLatest(FETCH_MOVIES_TYPE, fetchMoviesWorker);
  yield takeLeading(ADD_MOVIE_TYPE, addMovieWorker);
  yield takeLeading(UPDATE_MOVIE_TYPE, updateMovieWorker);
  yield takeLeading(DELETE_MOVIE_TYPE, deleteMovieWorker);
}

function* fetchMoviesWorker() {
  const data = yield call(fetchMoviesReq);

  yield put(setMovies(data));
}

function* addMovieWorker({ payload }) {
  const data = yield call(() => addMovieReq(payload));

  yield put(addMovie(data));
}

function* updateMovieWorker({ payload }) {
  const data = yield call(() => updateMovieReq(payload));

  yield put(updateMovie(data));
}

function* deleteMovieWorker({ payload }) {
  const id = yield call(() => deleteMovieReq(payload));

  yield put(deleteMovie(id));
}

export default rootSaga;
