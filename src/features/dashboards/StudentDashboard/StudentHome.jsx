import React, { useEffect, useState } from "react";
import Banner from "./CourseDetails/Components/Banner";
import CourseCard from "./CourseDetails/Components/CourseCard";
import Navbar from "./CourseDetails/Components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StudentHome = () => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const user = location.state;
  const {courseObj} = location.state;

  useEffect(() => {
    setCourses(courseObj);
    console.log("st", user);
  }, []);

  return (
    <>
      <Navbar studentObj={user} />
      <Banner
        heading="Courses"
        subHeading="Below are the courses you are enrolled in"
      />
      <div className="flex flex-wrap justify-center items-center p-1">
        {courses.map((obj, index) => (
          <CourseCard courseObj={obj} key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default StudentHome;
