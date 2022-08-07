import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService, { ICustomErrAxios, setAuthToken } from 'src/utils/http';
import { addSnackBar } from '../app/reducer';
import { IAuthRequest } from './types';

export const loginThunkAction = createAsyncThunk(
  'auth/login',
  async ({ email, password }: IAuthRequest, thunkAPI) => {
    try {
      const response = await httpService.post<{ token: string }>('/auth/login', {
        email,
        password,
      });
      setAuthToken(response.data.token);
      thunkAPI.dispatch(addSnackBar({ type: 'info', message: 'Login successfully' }));
      return response.data.token;
    } catch (error) {
      const { message } = error as ICustomErrAxios;
      thunkAPI.dispatch(addSnackBar({ type: 'error', message }));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const signUpThunkAction = createAsyncThunk(
  'auth/register',
  async ({ email, password }: IAuthRequest, thunkAPI) => {
    try {
      const response = await httpService.post<{ token: string }>('/auth/register', {
        email,
        password,
      });
      setAuthToken(response.data.token);
      thunkAPI.dispatch(addSnackBar({ type: 'info', message: 'Login successfully' }));
      return response.data.token;
    } catch (error) {
      const { message } = error as ICustomErrAxios;
      thunkAPI.dispatch(addSnackBar({ type: 'error', message }));
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const forgotPasswordApi = createAsyncThunk(
  'auth/forgot',
  async ({ email }: { email: string }, thunkAPI) => {
    try {
      await httpService.post(`/auth/forgot`, { email });
      thunkAPI.dispatch(addSnackBar({ type: 'info', message: 'Login successfully' }));
    } catch (error) {
      const { message } = error as ICustomErrAxios;
      thunkAPI.dispatch(addSnackBar({ type: 'error', message }));
      return thunkAPI.rejectWithValue(error);
    }
  },
);
