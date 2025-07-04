import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = testSlice.actions;
export default testSlice.reducer;
