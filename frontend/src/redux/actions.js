import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      console.log(email, password, rememberMe);
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        alert('Invalid email or password');
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.body.token;

      return token;

    } catch (error) {
      console.error('Error:', error);

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {

      return null;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/getProfile',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      return data.body;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUsername = createAsyncThunk(
  'auth/updateUsername',
  async (userName, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      const data = await response.json();

      return data.body.userName;

    } catch (error) {
      console.error('EDIT Error:', error);
      return rejectWithValue(error.message);
    }
  }
);