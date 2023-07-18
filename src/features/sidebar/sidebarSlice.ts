import { createSlice } from "@reduxjs/toolkit";

type SideBarState = {
  sidebar: boolean;
};

const initialState: SideBarState = {
  sidebar: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const selectAllSidebar = (state: { sidebar: SideBarState }) =>
  state.sidebar.sidebar;

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
