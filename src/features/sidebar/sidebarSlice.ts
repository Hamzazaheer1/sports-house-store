import {createSlice} from  "@reduxjs/toolkit"

type sideBarState = {
    sidebar: boolean;
}

const initialState = {
    sidebarState: false
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarState = !state.sidebarState;
        }
    }
})

export const selectAllSidebar = (state: sideBarState) => state.sidebar;
export const {toggleSidebar} = sidebarSlice.actions
export default sidebarSlice.reducer