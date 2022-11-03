import React, { useRef } from "react";

const Form = ({ handleSubmit, children }) => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, {
          username: userNameRef.current.value,
          password: passwordRef.current.value,
        })
      }
      className="m-auto pt-5 pb-3"
    >
      <input
        className="form-control bg-transparent mb-4 text-white"
        ref={userNameRef}
        type="text"
        placeholder="Enter your username"
      />
      <input
        className="form-control bg-transparent text-white"
        ref={passwordRef}
        type="password"
        placeholder="Enter your password"
      />
      {children}
    </form>
  );
};

export default Form;
