import { createSlice } from "@reduxjs/toolkit";
import { Contact } from "../Utils/interfaces";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [] as Array<Contact>,
  },
  reducers: {
    addContact: (state, action: any) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: any) => {
      let id = action.payload.id;
      state.contacts[id] = action.payload;
    },
    deleteContact: (state, action: any) => {
      let id = action.payload;
      if (id !== -1) {
        state.contacts.splice(id, 1);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = slice.actions;
export default slice.reducer;
