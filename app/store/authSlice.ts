import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROLES } from '../constants';

interface AuthState {
  user: any;
  token: string | null;
  role: keyof typeof ROLES | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ user: any; token: string; role: keyof typeof ROLES }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 