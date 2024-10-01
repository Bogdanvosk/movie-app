import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  isLoading: false,
  currentMovie: {},
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesAction: (state) => {
      state.isLoading = true;
    },
    fetchMovies: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },

    addMovieAction: (state) => {
      state.isLoading = true;
    },
    addMovie: (state, action) => {
      state.isLoading = false;
      state.movies = [...state.movies, action.payload];
    },

    updateMovieAction: () => {},
    updateMovie: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return action.payload;
        }
        return movie;
      });
    },
    deleteMovieAction: (state) => {
      state.isLoading = true;
    },
    deleteMovie: (state, action) => {
      state.isLoading = false;
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    searchMoviesAction: (state) => {
      state.isLoading = true;
    },
    fetchMovieAction: (state) => {
      state.isLoading = true;
    },
    fetchMovie: (state, action) => {
      state.isLoading = false;
      state.currentMovie = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const {
  fetchMoviesAction,
  fetchMovies,
  addMovieAction,
  addMovie,
  updateMovieAction,
  updateMovie,
  deleteMovieAction,
  deleteMovie,
  searchMoviesAction,
  fetchMovieAction,
  fetchMovie,
} = moviesSlice.actions;
