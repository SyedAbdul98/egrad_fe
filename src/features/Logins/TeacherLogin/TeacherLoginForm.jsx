import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TeacherLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTeacherLogin = async () => {
    const data = await axios.post("http://localhost:8080/teacher/get_teacher", {
      email,
      password,
    });
    console.log("Tea", data.data.courses, data.data.record);
    if (data.status === 200) {
      // console.log("user", user);
      navigate("/teacher/dashboard", {
        state: { user: data.data.record, courseObj: data.data.courses },
      });
    } else {
      setError(
        "Credientials not match with any record, Please contact the administrator"
      );
    }
  };

  return (
    <div className="flex flex-wrap w-4/6 justify-center items-center bg-white rounded-md">
      <div>
        <span className="text-3xl font-bold flex justify-center">
          Login to Your Account
        </span>
        <div className="flex justify-center mt-10">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleEmail0"
              className="form-label inline-block mb-2 text-gray-700 font-bold"
            >
              Email
            </label>
            <input
              type="email"
              className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
              id="exampleEmail0"
              placeholder="Email input"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="examplePassword0"
              className="form-label inline-block mb-2 text-gray-700 font-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
    "
              id="examplePassword0"
              placeholder="Password input"
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <link to="/user/events" /> */}
          <button
            onClick={handleTeacherLogin}
            type="button"
            className="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
        </div>
        {error && <p className="text-red-800 m-1">{error}</p>}
        <hr className="mt-5 h-1 bg-gray-100" />
        <div className="flex flex-wrap justify-end items-end">
          <button
            onClick={() => {
              setForgetPassword(true);
            }}
            type="button"
            className="inline-block px-6 py-2.5 bg-indigo-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out m-2"
          >
            Forget Password
          </button>
        </div>
        {forgetPassword && (
          <p>
            Please email <strong>serverroom@gcu.com</strong> for recovery
          </p>
        )}
      </div>
    </div>
  );
};

export default TeacherLoginForm;
