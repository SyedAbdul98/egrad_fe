import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TNavbar = ({ teacherObj }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  useEffect(() => {
    console.log("nav", teacherObj);
  }, [])
  return (
    <div className="bg-indigo-400 h-12 w-full flex flex-wrap justify-between">
      <div className="flex items-center">
        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 m-1 ml-3">
          <svg
            className="absolute -left-1 w-12 h-12 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-white font-bold">{teacherObj.teacherName}</span>
      </div>
      <div>
        {/* <button
      type="button"
      class="focus:outline-none text-white bg-fuchsia-400 hover:bg-fuchsia-400 focus:ring-4 focus:ring-fuchsia-400 font-medium text-sm px-5 py-2.5 m-1 dark:bg-fuchsia-400 dark:hover:bg-fuchsia-400 dark:focus:ring-fuchsia-400"
      onClick={handleAnnouncement}
    >
      Announcements
    </button> */}
        <button
          type="button"
          className="focus:outline-none text-white bg-indigo-400 hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-400 font-medium text-sm px-5 py-2.5 m-1 dark:bg-indigo-400 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TNavbar;
