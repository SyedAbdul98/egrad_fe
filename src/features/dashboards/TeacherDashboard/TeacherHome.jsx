import React, { useEffect, useState } from "react";
import TBanner from "./Components/TBanner";
import TCourseCard from "./Components/TCourseCard";
import TNavbar from "./Components/TNavbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const TeacherHome = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const {user} = location.state
  const  {courseObj } = location.state;
  // const courseObj = location.state;

  const getCourses = async () => {
    setCourses(courseObj);
  };

  useEffect(() => {
    getCourses();
    console.log("thome", user);
  }, []);

  return (
    <>
      <TNavbar teacherObj={user} />
      <TBanner
        heading="Courses"
        subHeading="Below are the courses will be taught by you in this semester"
      />
      <div className="flex flex-wrap justify-center items-center p-1">
        {courses.map((obj, index) => (
          <TCourseCard courseObj={obj} key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default TeacherHome;
