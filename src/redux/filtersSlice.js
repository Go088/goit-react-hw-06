import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    filteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredContacts } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
