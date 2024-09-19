import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action for login
export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await axios.post('http://yourapi.com/login', { email, password });
  return response.data; // Assuming the API returns user data
});

// Async action for registration
export const registerAsync = createAsyncThunk('auth/register', async ({ name, email, password }) => {
  const response = await axios.post('http://yourapi.com/register', { name, email, password });
  return response.data; // Assuming the API returns user data or a success message
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error
      });
  },
});



export const { logout } = authSlice.actions;
export default authSlice.reducer;
