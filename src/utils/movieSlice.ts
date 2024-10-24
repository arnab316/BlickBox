import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Movie {
  title: string;
  _id: string; 
  posterUrl: string;
  description: string;
}

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

// Thunk for fetching movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('http://localhost:4002/api/v1/movies');
  
  // Log to verify the structure
  // console.log('Fetched Movies:', response.data);

  return response.data.data; // Adjust based on your API's response structure
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload; // Store the movie array from the API
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

export default movieSlice.reducer;
