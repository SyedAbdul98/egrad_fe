import React, { useContext } from "react";
import { QuizContext } from "./QuizHome";
const QuizResults = () => {
  const { marks } = useContext(QuizContext);
  return (
    <div className="h-screen flex flex-wrap justify-center items-center">
      {" "}
      <div className="h-2/4 w-2/4 flex flex-wrap justify-center items-center bg-indigo-300 rounded-lg shadow-xl">
        <p className="font-bolder text-xl bg-indigo-600 rounded-lg m-1 p-2">
          Your Score is added
        </p>
      </div>
    </div>
  );
};

export default QuizResults;
