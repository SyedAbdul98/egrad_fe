import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TCourseCard = ({ courseObj, user }) => {
  const navigate = useNavigate();

  const handleCourseDetails = () => {
    navigate("/teacher/course/details", {
      state: { courseObj: courseObj, user: user },
    });
  };

  const handleGiveAssignment = () => {
    navigate("/teacher/course/assignwork", {
      state: { courseObj: courseObj , user: user},
    });
  };

  const handleGiveQuiz = () => {
    navigate("/teacher/course/makequiz", { state: { courseObj: courseObj } });
  };

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-indigo-400 shadow-md dark:bg-indigo-400 dark:border-indigo-400 m-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {courseObj.courseName}
      </h5>

      <p className="mb-3 font-normal text-white dark:text-white">
        {courseObj.courseMotivation}
      </p>
      <div className="flex flex-wrap justify-start p-1">
        <button
          type="button"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          onClick={handleCourseDetails}
        >
          Course Details
        </button>
        <button
          type="button"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          onClick={handleGiveQuiz}
        >
          Give Quiz
        </button>
        <button
          type="button"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          onClick={handleGiveAssignment}
        >
          Give Assignment
        </button>
      </div>
    </div>
  );
};

export default TCourseCard;
