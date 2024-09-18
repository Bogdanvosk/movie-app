import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload];
    },
    fetchMovies: (state) => {
      state.isLoading = true;
    },
    setMovies: (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    },

    updateMovie: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id) {
          return action.payload;
        }
        return movie;
      });
    },

    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export default moviesSlice.reducer;

export const { addMovie, fetchMovies, setMovies, updateMovie, deleteMovie } =
  moviesSlice.actions;
