import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getUsersThunk, putUsersThunk } from './thunks';
import { initialState } from './initialState';

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState.users,
  extraReducers: builder => {
    builder
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(putUsersThunk.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isFollowing = true;
      })
      .addMatcher(
        isAnyOf(getUsersThunk.pending, putUsersThunk.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getUsersThunk.rejected,
          putUsersThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          getUsersThunk.fulfilled,
          putUsersThunk.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const userReducer = usersSlice.reducer;
