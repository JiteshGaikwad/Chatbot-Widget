import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleWidget: false,
  userId: null,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    setToggleWidget: (state, action) => {
      state.toggleWidget = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setToggleWidget, setUserId } = widgetSlice.actions;

export default widgetSlice.reducer;
