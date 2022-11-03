import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  username: String;
  password: String;
};

type usersState = {
  Users: User[];
  currentUser: String;
};

const INITIAL_STATE: usersState = {
  Users: [],
  currentUser: "",
};

function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

function isUserNameExist(username: String) {
  const Users: User[] = getUsersFromLocalStorage();

  const targetUser = Users.filter((user: User) => {
    return user.username === username;
  });

  return targetUser[0]?.username === username ? true : false;
}

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    updateUsers: (state, action: PayloadAction<User[]>) => {
      const newUsers = action.payload;

      state.Users = newUsers;

      localStorage.setItem("users", JSON.stringify(state.Users));
    },
    addUser: (state, action: PayloadAction<User>) => {
      const newUser = action.payload;
      if (isUserNameExist(newUser.username)) return;

      state.Users.push(newUser);

      localStorage.setItem("users", JSON.stringify(state.Users));
    },
    setCurrentUser: (state, action: PayloadAction<String>) => {
      const currentUser = action.payload;

      state.currentUser = currentUser;
    },
  },
});

const usersReducer = usersSlice.reducer;

export const { updateUsers, addUser, setCurrentUser } = usersSlice.actions;

export default usersReducer;
