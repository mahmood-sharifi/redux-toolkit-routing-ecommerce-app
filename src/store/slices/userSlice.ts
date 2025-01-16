import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UserState {
  user: User | null;
  isDarkMode: boolean;
}

const initialState: UserState = {
  user: null,
  isDarkMode: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    loginUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  },
});

export const { registerUser, loginUser, logoutUser, toggleDarkMode } = userSlice.actions;
export default userSlice.reducer;
