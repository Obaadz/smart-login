import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import MainLayout from "../layouts/MainLayout";
import { setCurrentUser } from "../redux/slice/usersSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

  function handleLogout(e) {
    dispatch(setCurrentUser(""));
  }

  return (
    <MainLayout>
      <Head>
        <title>Welcome Page</title>
        <meta name="description" content="Welcome to smart-login system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav class="navbar position-fixed w-100 px-5 border-bottom border-info border-opacity-10 shadow-lg rounded-3">
        <div class="container-fluid">
          <Link href="/">
            <a class="navbar-brand text-uppercase text-white">Smart Login</a>
          </Link>
          <Link href="/">
            <button class="btn btn-outline-success" onClick={handleLogout}>
              Logout
            </button>
          </Link>
        </div>
      </nav>
      <Container className="d-flex justify-content-center align-items-center vh-100 pb-5">
        <h1>Welcome {currentUser} </h1>
      </Container>
    </MainLayout>
  );
};

export default Welcome;
