import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postService } from '../../utils/http';
import { IAuthState, ISignInRep, ISignUpRep } from './types';

const initialState: IAuthState = {
  loading: false,
  error: '',
  token: '',
  isAuth: false,
};

export const signInService = createAsyncThunk(
  'auth/signIn',
  async ({ email, password, callback }: ISignInRep, thunkAPI) => {
    try {
      const response = await postService('/auth/signIn', {
        email,
        password,
      });
      callback();
      return response.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const signUpService = createAsyncThunk(
  'auth/signUp',
  async ({ first_name, last_name, email, password, callback }: ISignUpRep, thunkAPI) => {
    try {
      const response = await postService('/user/register', {
        first_name,
        last_name,
        email,
        password,
      });
      callback();
      return response.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const forgotService = createAsyncThunk(
  'auth/forgot',
  async ({ email, callback }: ISignUpRep, thunkAPI) => {
    try {
      const response = await postService('/auth/forgot', {
        email,
      });
      callback();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state: IAuthState, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setToken: (state: IAuthState, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    clearError: (state: IAuthState) => {
      state.error = '';
    },
    logout: (state: IAuthState) => {
      state.token = '';
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(signInService.fulfilled, (state: IAuthState, { payload }: PayloadAction<string>) => {
        state.token = payload;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      })
      .addCase(signInService.rejected, (state: IAuthState, { payload }: PayloadAction<any>) => {
        state.error = payload;
        state.isAuth = false;
        state.loading = false;
      })
      .addCase(signUpService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(signUpService.fulfilled, (state: IAuthState, { payload }: PayloadAction<string>) => {
        state.token = payload;
        state.isAuth = true;
        state.error = '';
        state.loading = false;
      })
      .addCase(signUpService.rejected, (state: IAuthState, { payload }: PayloadAction<any>) => {
        state.error = payload;
        state.loading = false;
        state.isAuth = false;
      })
      .addCase(forgotService.pending, (state: IAuthState) => {
        state.loading = true;
      })
      .addCase(forgotService.fulfilled, (state: IAuthState) => {
        state.error = '';
        state.loading = false;
      })
      .addCase(forgotService.rejected, (state: IAuthState, { payload }: PayloadAction<any>) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { setLoading, setToken, clearError, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
