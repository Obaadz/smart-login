import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import Form from "../components/form/Form";
import MainLayout from "../layouts/MainLayout";
import { setCurrentUser } from "../redux/slice/usersSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  function handleSubmit(e, userData) {
    e.preventDefault();

    if (isUserValid(userData)) {
      dispatch(setCurrentUser(userData.username));
      router.replace("/welcome");
    }
  }

  return (
    <MainLayout>
      <Head>
        <title>Signin Page</title>
        <meta name="description" content="Normal signin page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="mt-5 p-5 text-center shadow-lg border border-dark border-opacity-10 rounded w-75">
        <h1 className="text-info fs-2 fw-normal">Smart Login System</h1>
        <Form handleSubmit={handleSubmit}>
          <input
            className="form-control btn btn-outline-info mt-5 hover:text-white fw-light"
            type="submit"
            value="Login"
          />
        </Form>
        <p>
          Don{"'"}t have an account?{" "}
          <Link href="/register">
            <a className="link-light text-decoration-none hover:text-underline">
              Signup
            </a>
          </Link>
        </p>
      </Container>
    </MainLayout>
  );
}

function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

function isUserValid(userData) {
  const Users = getUsersFromLocalStorage();

  const targetUser = Users.find((user) => {
    if (user.username === userData?.username) return user;
  });

  return userData?.password === targetUser?.password ? true : false;
}
