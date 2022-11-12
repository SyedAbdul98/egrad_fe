import React, { useEffect } from "react";
import { useState, createContext } from "react";
import QuizStart from "./QuizStart";
import QuizBody from "./QuizBody";
import QuizResults from "./QuizResults";
import { useLocation } from "react-router-dom";
export const QuizContext = createContext();
const QuizHome = () => {
  const location = useLocation();
  const { courseObj, questionsData, user } = location.state;
  const [quizState, setQuizState] = useState("start");
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    console.log("QH", courseObj, questionsData, user);
  }, []);
  return (
    <div className="App">
      <QuizContext.Provider
        value={{ quizState, setQuizState, marks, setMarks }}
      >
        {quizState === "start" && <QuizStart />}
        {quizState === "quiz" && (
          <QuizBody
            Questions={questionsData}
            courseName={courseObj.courseName}
            studentName={user.user.studentName}
            rollNumber={user.user.rollNumber}
          />
        )}
        {quizState === "results" && <QuizResults />}
      </QuizContext.Provider>
    </div>
  );
};

export default QuizHome;
