import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import axios from "axios";
import { useState, useEffect } from "react";
import Moment from "react-moment";
const AssignWork = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseObj } = location.state;
  const [announcements, setAnnouncements] = useState([]);

  const handleTakeQuizClick = () => {
    navigate("/student/course/quiz", { state: { courseObj } });
  };

  const getAnnouncements = async () => {
    const courseName = courseObj.courseName;
    const data = await axios.post(
      "http://localhost:8080/announcement/get_announcement",
      { courseName }
    );
    console.log("getan", data);
    setAnnouncements(data.data.recAnn);
    console.log("annm", announcements);
  };

  useEffect(() => {
    getAnnouncements();
  }, []);
  return (
    <div className="h-screen w-screen overflow-auto">
      <Header courseObj={courseObj} />
      <Banner
        heading="Announcements"
        subHeading="Below are your announcements from your teacher"
      />
      <div className="  h-13 m-2 p-1 rounded-lg">
        {announcements.map((annObj, index) => (
          <div
            className="flex flex-wrap justify-between h-13 m-2 p-1 rounded-lg bg-indigo-200"
            key={index}
          >
            <div className="flex flex-wrap justify-start">
              <div className="m-2 bg-white p-1 rounded-2xl">
                <PriorityHighIcon />
              </div>
              <div className="m-2 p-1">{annObj.announcementBody}</div>
            </div>
            <div className="m-2">
              <Moment fromNow>{new Date(annObj.createdAt).toString()}</Moment>
            </div>
          </div>
        ))}

        {/* <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleTakeQuizClick}
        >
          Take Quiz
        </button> */}
      </div>
    </div>
  );
};

export default AssignWork;
