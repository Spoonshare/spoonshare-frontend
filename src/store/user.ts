import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  username: string;
  password: string;
}

const initialState: UserState = {
  username: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.user.username;
      state.password = action.payload.user.password;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
