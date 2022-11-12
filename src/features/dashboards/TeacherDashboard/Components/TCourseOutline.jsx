import React from "react";
import { useLocation } from "react-router-dom";
const TCourseOutline = () => {
  const location = useLocation();
  const { courseObj } = location.state;
  return (
    <div className="h-full w-screen ">
      <div className="w-full h-max m-2 p-1"><h1>Hi! there, if you want to make any changes, please email to serverroom@gcu.com with the course name and new data. Thanks</h1></div>
      <div className="w-full h-max rounded-md shadow-lg m-2 p-1">
        <h1 className="font-bold text-xl m-2 ">Course Outline</h1>
        <span className="text-lg m-1 p-1">{courseObj.courseOutline}</span>
      </div>
      <div className="w-full h-max rounded-md shadow-lg m-2 p-1">
        <h1 className="font-bold text-xl m-2">Note From Teacher</h1>
        <span className="text-lg m-1 p-1">{courseObj.courseMotivation}</span>
      </div>
    </div>
  );
};

export default TCourseOutline;
