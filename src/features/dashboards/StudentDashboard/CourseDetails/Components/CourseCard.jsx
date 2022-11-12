import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ courseObj, user }) => {
  const navigate = useNavigate();
  // const [courseName, setCourseName] = useState("");
  const [questionsData, setQuestionsData] = useState([]);


  const getQuiz = async (courseName) => {
    
    const quizData = await axios.post("http://localhost:8080/quiz/get_quiz", {
      courseName,
    });
    console.log("dataCC", quizData.data.recAnn);
    setQuestionsData(quizData.data.recAnn);
  };

  const handleTakeQuiz = () => {
    navigate("/student/course/quiz", {
      state: { courseObj: courseObj, user: user, questionsData: questionsData },
    });
  };
  useEffect(() => {
    // setCourseName(courseObj.courseName);
    console.log("CC", courseObj, user);
    getQuiz(courseObj.courseName);
  }, []);
  const handleCourseDetails = () => {
    navigate("/student/course/details", {
      state: { courseObj: courseObj, user: user },
    });
  };

  return (
    <div className="p-6 max-w-sm bg-white rounded-lg border border-indigo-400 shadow-md dark:bg-indigo-400 dark:border-indigo-400 m-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {courseObj.courseName}
      </h5>

      <p className="mb-3 font-normal text-white dark:text-white">
        {courseObj.courseMotivation}
      </p>
      <div className="flex flex-wrap justify-between p-1">
        <button
          type="button"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          onClick={handleCourseDetails}
        >
          Course Details
        </button>
        {questionsData && (
          <button
            type="button"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            onClick={handleTakeQuiz}
          >
            Take Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
