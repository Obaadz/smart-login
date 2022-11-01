import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateUsers } from '../redux/slice/usersSlice';

function getUsersFromLocalStorage() {
  return localStorage.getItem("users");
}

const MainLayout = ({children}) => {
	const dispatch = useDispatch();

  useEffect(() => {
    const Users = getUsersFromLocalStorage() || [];

    dispatch(updateUsers(JSON.parse(Users)));
  }, [])

	return (
		<>{children}</>
	)
}

export default MainLayout