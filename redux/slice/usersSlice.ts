import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: String;
  password: String;
};

type usersState = {
  Users: User[];
};

function isThereUsersInLocalStorage() {
  return localStorage.getItem("users") ? true  : false;
}

function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

const INITIAL_STATE: usersState = {
  Users: isThereUsersInLocalStorage() ? getUsersFromLocalStorage() : [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    updateUsers: (state, action: PayloadAction<User[]>) => {
      const newUsers = action.payload;

      state.Users = newUsers;
    },
  },
});

const usersReducer = usersSlice.reducer;

export const { updateUsers } = usersSlice.actions;

export default usersReducer;
