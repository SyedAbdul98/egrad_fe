import React, { useContext } from "react";
import { QuizContext } from "./QuizHome";
const QuizStart = () => {
  const { quizState, setQuizState } = useContext(QuizContext);
  console.log(quizState);
  return (
    <>
      
      <div className="h-screen flex flex-wrap justify-center items-center">
        <button
          className="m-1 p-2 h-10 w-20 rounded-xl shadow-2xl  bg-indigo-400"
          onClick={() => {
            setQuizState("quiz");
          }}
        >
          Start
        </button>
      </div>
    </>
  );
};

export default QuizStart;
