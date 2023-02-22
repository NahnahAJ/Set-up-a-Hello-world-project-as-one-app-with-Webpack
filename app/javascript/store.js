import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './components/redux/greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greetingData: greetingSlice,
  },
});

export default store;
