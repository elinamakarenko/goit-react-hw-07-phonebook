import { fetchContactsAll } from 'services/contacts-api';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const contacts = await fetchContactsAll();
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};
