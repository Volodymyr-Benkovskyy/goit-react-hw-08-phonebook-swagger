import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addContacts = createAsyncThunk(
  'contacts/addcontacts',
  async (contacts, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contacts);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

/* import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (items, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const contacts = await addContactsApi({ items, localId, idToken });
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      const data = await getContactApi({ localId, idToken });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue, getState }) => {
    const { localId, idToken } = getState().auth;
    try {
      await removeContactApi({ id, localId, idToken });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
); */
