import React from "react";
import bookImage from "../../../../assests/Images/books.jpg";
import { useNavigate } from "react-router-dom";
const TCourseOutlineCard = ({ courseObj }) => {
  const Navigate = useNavigate();
  const handleCourseOutlineClick = () => {
    Navigate("/teacher/course/courseoutline", { state: { courseObj } });
  };
  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-indigo-400 dark:border-black-700 m-2">
        <a href="#">
          <img className="rounded-t-lg" src={bookImage} alt />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">
              Course Outline
            </h5>
          </a>
          <p className="mb-3 font-normal text-black dark:text-black">
            Here, the things related to course you are going to learn in this
            subject during the semester.
          </p>
          <div
            onClick={handleCourseOutlineClick}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
          >
            Course Outline
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCourseOutlineCard;
