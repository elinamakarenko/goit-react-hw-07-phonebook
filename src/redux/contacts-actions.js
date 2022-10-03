import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
export const filterContacts = createAction('contacts/filter');
export const addContacts = createAction('contacts/add', data => {
  console.log(data);
  return {
    payload: { id: shortid.generate(), ...data },
  };
});
export const deleteContacts = createAction('contacts/delete');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
