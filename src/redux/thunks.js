import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, putUser } from './usersApi';

export const getUsersThunk = createAsyncThunk('users/fetchAll', () => {
  return fetchUsers();
});

export const putUsersThunk = createAsyncThunk('users/putUser', id => {
  return putUser(id);
});
