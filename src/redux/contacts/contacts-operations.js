import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await axios.get('/contacts');
    return contacts.data;
  }
);

export const postContact = (body) => async (dispatch) => {
  dispatch(actions.addRequest());

  try {
    const contacts = await axios.post('/contacts', body);
    dispatch(actions.addSuccess(contacts.data));
  } catch (error) {
    dispatch(actions.addError(error));
  }
};

export const removeContact = (id) => async (dispatch) => {
  dispatch(actions.removeRequest());

  try {
    await axios.delete(`/contacts/${id}`).then(() => {
      dispatch(actions.removeSuccess(id));
    });
  } catch (error) {
    dispatch(actions.removeError(error));
  }
};
