import axios from 'axios';

axios.defaults.baseURL = 'https://6465f0119c09d77a62f84253.mockapi.io/tweets';

export async function fetchUsers(page = 1) {
  const { data } = await axios.get(`/users?page=${page}&limit=2`);
  return data;
}

export async function putUser(id, updateData) {
  const { data } = await axios.put(`/users/${id}`, updateData);
  return data;
}