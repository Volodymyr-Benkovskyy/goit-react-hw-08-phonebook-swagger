import { createSlice } from '@reduxjs/toolkit';
import {
  logInOperation,
  logOut,
  refreshUserOperation,
  registerOperation,
} from './authOperation';

const initialState = {
  isAuth: false,
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerOperation.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(registerOperation.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoggedIn: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerOperation.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
        setTimeout(() => {
          alert(' Помилка: ');
        }, 1000);
      })
      .addCase(logInOperation.pending, state => {
        state.isLoading = true;
      })
      .addCase(logInOperation.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoggedIn: false,
          error: null,
          ...payload,
        };
      })
      .addCase(logInOperation.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
        setTimeout(() => {
          alert(' Помилка: ');
        }, 0);
      })
      .addCase(logOut.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        return {
          isLoggedIn: false,
          ...initialState,
        };
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(refreshUserOperation.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(refreshUserOperation.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoggedIn: false,
          error: null,
          ...payload,
        };
      })
      .addCase(refreshUserOperation.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

/* import { createSlice } from '@reduxjs/toolkit';
import { getCurUser, loginUser, registerUser } from './authOperation';

const initialState = {
  isAuth: false,
  idToken: null,
  email: null,
  refreshToken: null,
  localId: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getCurUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getCurUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;

// creating an operation registerUser and  extraReducers
 */
