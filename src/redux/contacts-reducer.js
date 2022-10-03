import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContacts,
  addContacts,
  deleteContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [fetchContactsSuccess]: () => null,
});
export default combineReducers({
  items,
  isLoading,
  error,
});
