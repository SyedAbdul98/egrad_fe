import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "./QuizHome";
const QuizBody = ({ Questions, courseName, studentName, rollNumber }) => {
  const { marks, setMarks, setQuizState } = useContext(QuizContext);
  const [currentQ, setCurrentQuestions] = useState(0);
  const [choosenOp, setChoosenOp] = useState("");
  const [isQuiz, setIsQuiz] = useState(false);

  // const Questions = [
  //   {
  //     prompt: "What is my name?",
  //     optionA: "John",
  //     optionB: "Jake",
  //     optionC: "Josh",
  //     optionD: "Pedro",
  //     asnwer: "optionD",
  //   },
  //   {
  //     prompt: "Which of this is not a programming language?",
  //     optionA: "Python",
  //     optionB: "JavaScript",
  //     optionC: "MC-03",
  //     optionD: "Java",
  //     asnwer: "optionC",
  //   },
  //   {
  //     prompt: "Which of this is not a javascript framework?",
  //     optionA: "React",
  //     optionB: "Angular",
  //     optionC: "Vue",
  //     optionD: "Java",
  //     asnwer: "optionD",
  //   },
  // ];

  const handleFinishQuiz = async () => {
    if (choosenOp == Questions[currentQ].correctOption) {
      setMarks(marks + 1);  
    }
    console.log(marks);
    const marksData = await axios.post(
      "http://localhost:8080/marks/add_marks",
      { courseName, studentName, marks, rollNumber }
    );

    setQuizState("results");
  };
  const handleNextQuestion = () => {
    if (choosenOp == Questions[currentQ].correctOption) {
      setMarks(marks + 1);
    }
    setCurrentQuestions(currentQ + 1);
  };

  useEffect(() => {
    console.log("Q", Questions, courseName, studentName, rollNumber);
    if (Questions.length >= 1) {
      setIsQuiz(true);
    }
  }, []);
  return (
    <>
      {isQuiz ? (
        <div className="h-screen flex flex-wrap justify-center items-center">
          <div className="h-2/4 w-3/4 m-2 p-1 rounded-lg shadow-xl bg-indigo-100">
            <h1
              className="font-bold text-xl select-none"
            >
              {Questions[currentQ].question}
            </h1>
            <p
              className="m-1 p-1 hover:font-bolder hover:bg-indigo-300"
              onClick={() => {
                setChoosenOp("optionA");
              }}
            >
              {Questions[currentQ].optionA}
            </p>
            <p
              className="m-1 p-1 hover:font-bolder hover:bg-indigo-300"
              onClick={() => {
                setChoosenOp("optionB");
              }}
            >
              {Questions[currentQ].optionB}
            </p>
            <p
              className="m-1 p-1 hover:font-bolder hover:bg-indigo-300"
              onClick={() => {
                setChoosenOp("optionC");
              }}
            >
              {Questions[currentQ].optionC}
            </p>
            <p
              className="m-1 p-1 hover:font-bolder hover:bg-indigo-300"
              onClick={() => {
                setChoosenOp("optionD");
              }}
            >
              {Questions[currentQ].optionD}
            </p>

            {currentQ === Questions.length - 1 ? (
              <>
                <button onClick={handleFinishQuiz}>FinishQuiz</button>
              </>
            ) : (
              <button onClick={handleNextQuestion}>Next Question</button>
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-wrap justify-center items-center">
          <p>No Quiz is uploaded from teacher</p>
        </div>
      )}
    </>
  );
};

export default QuizBody;
