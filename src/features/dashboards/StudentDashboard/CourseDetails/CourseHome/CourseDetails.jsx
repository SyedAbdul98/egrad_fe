import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CourseOutlineCard from "../Components/CourseOutlineCard";
import GradesCard from "../Components/GradesCard";
import { useEffect, useState } from "react";
import QuizHome from "../Quiz/QuizHome";

const CourseDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseObj, user } = location.state;
 
  return (
    <>
      <Header courseObj={courseObj} user={user} />
      <div className="flex flex-wrap justify-start">
        <CourseOutlineCard courseObj={courseObj} />
        {/* {questionsData && (
          // <QuizHome courseObj={courseObj} questions={questionsData} />
          <p onClick={handleTakeQuiz}>
            You have a Quiz to atttempt, Click to start
          </p>
        )} */}
      </div>
    </>
  );
};

export default CourseDetails;
