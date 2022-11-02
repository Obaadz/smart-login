import React from "react";

const Form = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} className="m-auto pt-5 pb-3">
      <input
        className="form-control bg-transparent mb-4 text-white"
        type="text"
        placeholder="Enter your username"
      />
      <input
        className="form-control bg-transparent text-white"
        type="password"
        placeholder="Enter your password"
      />
      {children}
    </form>
  );
};

export default Form;
