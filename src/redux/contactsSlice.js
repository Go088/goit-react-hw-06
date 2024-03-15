import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContacts(state, action) {
      state.items.push({
        id: nanoid(),
        name: action.payload.value.name,
        number: action.payload.value.number,
      });
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContacts, deleteContacts } = slice.actions;

export default slice.reducer;
