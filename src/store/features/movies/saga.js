import {
  all,
  call,
  fork,
  put,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import { addMovie, setMovies } from '.';
import { addMovieReq, fetchMoviesReq } from '../../../api';
import { ADD_MOVIE_TYPE, FETCH_MOVIES_TYPE } from '../../../constants';

function* rootSaga() {
  yield all([fork(moviesSagaWatcher)]);
}

function* moviesSagaWatcher() {
  yield takeLatest(FETCH_MOVIES_TYPE, fetchMoviesWorker);
  yield takeLeading(ADD_MOVIE_TYPE, addMovieWorker);
}

function* fetchMoviesWorker() {
  const data = yield call(fetchMoviesReq);

  yield put(setMovies(data));
}

function* addMovieWorker({ payload }) {
  const data = yield call(() => addMovieReq(payload));

  yield put(addMovie(data));
}

export default rootSaga;
