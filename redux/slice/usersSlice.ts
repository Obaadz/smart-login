import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  username: String;
  password: String;
};

type usersState = {
  Users: User[];
};

const INITIAL_STATE: usersState = {
  Users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    updateUsers: (state, action: PayloadAction<User[]>) => {
      const newUsers = action.payload;

      state.Users = newUsers;

      localStorage.setItem("users", JSON.stringify(newUsers));
    },
  },
});

const usersReducer = usersSlice.reducer;

export const { updateUsers } = usersSlice.actions;

export default usersReducer;
