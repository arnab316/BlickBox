
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (query: string) => {
    const response = await axios.get(`http://localhost:4002/api/v1/search/${query}`);
    return response.data; 

  }
);

interface SearchState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.results = action.payload.data;
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch search results';
    });
  },
});

export default searchSlice.reducer;
