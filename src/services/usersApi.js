import axios from 'axios';

axios.defaults.baseURL = 'https://6465f0119c09d77a62f84253.mockapi.io/tweets';

export async function fetchUsers(page = 1) {
  const { data } = await axios.get(`/users?page=${page}&limit=12`);
  return data;
}

export async function putUser(id, followers) {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
}