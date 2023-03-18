import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: { loading: true, order: {}, error: "" },
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    fetchRequest: (state) => {
      state.order.loading = true;
      state.order.error = "";
    },
    fetchSuccess: (state, action) => {
      state.order.loading = false;
      state.order.error = "";
      state.order.order = action.payload;
    },
    fetchFail: (state, action) => {
      state.order.loading = false;
      state.order.error = action.payload;
    },
  },
});

export const { fetchRequest, fetchSuccess, fetchFail } = orderSlice.actions;

export default orderSlice.reducer;
