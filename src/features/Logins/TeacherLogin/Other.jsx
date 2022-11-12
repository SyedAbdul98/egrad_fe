import React from "react";
import { useNavigate } from "react-router-dom";
const Other = () => {
  const navigate = useNavigate();

  const handleTeacherLogin = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-wrap h-full w-2/6 justify-center items-center bg-indigo-900 rounded-md">
      <div className=" text-center border-3 border-solid border-white-500">
        <div className="flex-wrap justify-center items-center h-full">
          <span className="text-xl font-bold text-white font-mono">
            Are you a Student?
          </span>
        </div>
        <div className="items-center">
          <p className="text-white">Work hard, you guys are the future.</p>
        </div>
        <div className="mt-10">
          <button
            className="bg-white w-10/12 p-1 shadow font-bold hover:rounded-2xl hover:duration-200"
            onClick={handleTeacherLogin}
          >
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Other;
