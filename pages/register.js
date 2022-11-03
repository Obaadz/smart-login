import Head from "next/head";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import Form from "../components/form/Form";
import MainLayout from "../layouts/MainLayout";
import { addUser } from "../redux/slice/usersSlice";

export default function Register() {
  const dispatch = useDispatch();

  function handleSubmit(e, userData) {
    e.preventDefault();

    if (userData.username.length > 0 && userData.password.length > 0)
      dispatch(addUser(userData));
  }

  return (
    <MainLayout>
      <Head>
        <title>Register Page</title>
        <meta name="description" content="Normal signup page" />
      </Head>
      <Container className="mt-5 p-5 text-center shadow-lg border border-dark border-opacity-10 rounded w-75">
        <h1 className="text-info fs-2 fw-normal">Smart Login System</h1>
        <Form handleSubmit={handleSubmit}>
          <input
            className="form-control btn btn-outline-info mt-5 hover:text-white fw-light"
            type="submit"
            value="Sign Up"
          />
        </Form>
        <p>
          You have an account?{" "}
          <Link href="/">
            <a className="link-light text-decoration-none hover:text-underline">
              Sign in
            </a>
          </Link>
        </p>
      </Container>
    </MainLayout>
  );
}
