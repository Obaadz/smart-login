import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUsers } from "../redux/slice/usersSlice";

function getUsersFromLocalStorage() {
  return localStorage.getItem("users");
}

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const Users = JSON.parse(getUsersFromLocalStorage()) || [];

    dispatch(updateUsers(Users));
  }, []);

  return <>{children}</>;
};

export default MainLayout;
