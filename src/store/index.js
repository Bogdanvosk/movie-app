import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import moviesSlice from './features/movies';
import rootSaga from './features/movies/saga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  movies: moviesSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
