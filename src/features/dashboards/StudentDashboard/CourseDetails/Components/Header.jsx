import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ courseObj, user }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/student/dashboard");
  };

  const handleDiscussionsClick = () => {
    navigate("/student/course/discussions", {
      state: { courseObj: courseObj, user : user},
    });
  };
  const handleAssignWorkClick = () => {
    navigate("/student/course/assignwork", {
      state: { courseObj: courseObj },
    });
  };
  const handleLogoutClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-wrap justify-between items-between h-12 bg-indigo-400 p-1 w-full">
      <div className="m-1 ml-2 p-1">
        <span className="text-white font-bold">{courseObj.courseName}</span>
      </div>
      <div>
        {/* <button
          type="button"
          className="text-white bg-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-400 dark:hover:bg-indigo-400 focus:outline-none dark:focus:ring-indigo-400"
          onClick={handleHomeClick}
        >
          Home
        </button> */}
        <button
          type="button"
          className="text-white bg-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-400 dark:hover:bg-indigo-400 focus:outline-none dark:focus:ring-indigo-400"
          onClick={handleDiscussionsClick}
        >
          Discussions
        </button>
        <button
          type="button"
          className="text-white bg-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-400 dark:hover:bg-indigo-400 focus:outline-none dark:focus:ring-indigo-400"
          onClick={handleAssignWorkClick}
        >
          Assign Work
        </button>
        <button
          type="button"
          className="text-white bg-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-400 dark:hover:bg-indigo-400 focus:outline-none dark:focus:ring-indigo-400"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
