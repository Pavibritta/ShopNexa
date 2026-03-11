import React, { useState } from "react";

const SignIn = ({ onClose,onOpen }) => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [error, setError] = useState({});

  const handleLogin = () => {
    const error = {};

    if (!formData.userName.trim()) error.userName = "User Name is required";
    if (!formData.password.trim()) error.password = "Password is required";

    if (Object.keys(error).length > 0) {
      setError(error);
    } else {
      setError({});
      onClose();
      onOpen()
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };
  return (
    <>
      <section className="fixed inset-0 flex items-center  justify-center z-50 bg-white w-full max-w-xl mx-auto mt-30 rounded-xl shadow flex-col gap-3">
        <button
          className="bg-Primary text-white rounded cursor-pointer absolute top-5 right-5 p-3"
          onClick={onClose}
        >
          X
        </button>

        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={formData.userName}
          className="mx-auto px-3 py-2 rounded shadow bg-white outline-none"
          onChange={handleChange}
        />
        {error.userName && <p className="text-red-600">{error.userName}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          className="mx-auto px-3 py-2 rounded shadow bg-white outline-none"
          onChange={handleChange}
        />
        {error.password && <p className="text-red-600">{error.password}</p>}
        <button
          className="bg-linear-to-r from-Primary to-Secondary text-white px-3 py-2 rounded cursor-pointer flex items-center gap-3 "
          onClick={handleLogin}
        >
          Sign In
        </button>
      </section>
    </>
  );
};

export default SignIn;
