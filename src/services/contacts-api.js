import axios from 'axios';

axios.defaults.baseURL = 'https://6339cf5ed6ef071af816cb22.mockapi.io';

export async function fetchContactsAll() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
