import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import receiveGreeting from '../grettings_api/api';

const GET_RANDOM_GREETING = createAction('messages/get_random_greeting');

const initialState = {
  loading: false,
  greeting: [],
  error: '',
};

export const getGreeting = createAsyncThunk(GET_RANDOM_GREETING, async () => {
  const greeting = await receiveGreeting();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greetingData',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.loading = false;
        state.greeting = [];
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
