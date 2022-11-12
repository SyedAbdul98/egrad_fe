import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const MakeQuiz = () => {
  const location = useLocation();
  const { courseObj } = location.state;
  const [courseName, setCourseName] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleSaveQuestion = async (courseName) => {
    setCourseName(courseObj.courseName);
    console.log(
      "q",
      courseName,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption
    );
    const data = await axios.post("http://localhost:8080/quiz/add_question", {
      courseName,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctOption,
    });
    console.log(data);
  };

  useEffect(() => {
    console.log(courseObj);
  }, []);
  return (
    <div className="h-screen flex flex-wrap justify-center items-center flex-col">
      <h1 className="font-bold text-lg bg-indigo-300 p-1 m-2">
        Please start entering the Questions Below one by one for subject{" "}
        {courseObj.courseName}
      </h1>
      <div className="h-max w-3/4 bg-indigo-200 flex flex-wrap justify-start flex-col items-start p-2">
        <input
          type="text"
          placeholder="Enter Question"
          className="h-10 w-3/4 m-1 p-1 "
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Option A"
          className="h-10 w-1/4 m-1 p-1 "
          onChange={(e) => {
            setOptionA(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Option B"
          className="h-10 w-1/4 m-1 p-1 "
          onChange={(e) => {
            setOptionB(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Option C"
          className="h-10 w-1/4 m-1 p-1 "
          onChange={(e) => {
            setOptionC(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Option D"
          className="h-10 w-1/4 m-1 p-1 "
          onChange={(e) => {
            setOptionD(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Correct option"
          className="h-10 w-1/4 m-1 p-1 "
          onChange={(e) => {
            setCorrectOption(e.target.value);
          }}
        />
        <div className="h-max w-full flex flex-wrap justify-center items-center">
          <button
            className="m-1 p-1 bg-indigo-600 rounded-xl shadow-xl font-bold"
            onClick={() => (handleSaveQuestion(courseObj.courseName))}
          >
            Save Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeQuiz;
