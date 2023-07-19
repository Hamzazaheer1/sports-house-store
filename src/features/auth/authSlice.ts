import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  auth: boolean;
};

const initialState: AuthState = {
  auth: false,
};

export const sidebarSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state) => {
      state.auth = !state.auth;
    },
  },
});

export const authState = (state: { auth: AuthState }) =>
  state.auth.auth;

export const { setAuthState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
