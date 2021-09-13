import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import tokenSettings from '../../services/api';

const register = createAsyncThunk('auth/Register', async (userData) => {
  try {
    const { data } = await axios.post('/users/signup', userData);
    tokenSettings.add(data.token);
    return data;
  } catch (error) {
    alert(error);
    throw error;
  }
});

const logIn = createAsyncThunk('auth/Login', async (userData, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', userData);
    tokenSettings.add(data.token);
    return data;
  } catch (error) {
    alert(error);
    throw error;
  }
});

const logOut = createAsyncThunk('auth/Logout', async () => {
  try {
    await axios.post('/users/logout');
    tokenSettings.remove();
  } catch (error) {
    alert(error);
    throw error;
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/FetchCurrentUser',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token === '') return thunkAPI.rejectWithValue();

    tokenSettings.add(token);
    try {
      const user = await axios.get('/users/current');
      return user.data;
    } catch (error) {
      alert(error);
      throw error;
    }
  }
);

const autOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default autOperations;
