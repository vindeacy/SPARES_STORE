import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async actions for login and registration would go here

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Define your reducers here (loginSuccess, loginFailure, etc.)
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;