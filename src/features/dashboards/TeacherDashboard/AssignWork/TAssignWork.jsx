import React, { useState } from "react";
import THeader from "../Components/THeader";
import { useLocation } from "react-router-dom";
import TBanner from "../Components/TBanner";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import axios from "axios";
import { useEffect } from "react";
import Moment from "react-moment";

const AssignWork = () => {
  const [announcementBody, setannouncementBody] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const location = useLocation();
  const { user } = location.state;
  const { courseObj } = location.state;
  const courseName = courseObj.courseName;
  const handleAssignWork = async (e) => {
    e.preventDefault();
    console.log("hn", announcementBody);
    console.log("c", courseObj.courseName);
    console.log("us", user);
    addAnnouncement();
  };

  const addAnnouncement = async () => {
    console.log("dts", courseName, announcementBody);
    const data = await axios.post(
      "http://localhost:8080/announcement/add_announcement",
      { courseName, announcementBody }
    );
    console.log("ada", data);
  };
  const getAnnouncements = async () => {
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
      <THeader courseObj={courseObj} />
      <div className="w-full flex flex-wrap justify-between p-1">
        <div>
          <TBanner
            heading="Announcements"
            subHeading="Below are the announcements made by you for the students"
          />
        </div>
        <div className="">
          <form className="flex flex-wrap justify-start">
            <input
              type="text"
              className="flex flex-grow m-1 border-2 border-black p-1"
              placeholder="Enter to assign"
              onChange={(e) => {
                setannouncementBody(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={handleAssignWork}
              className="bg-indigo-500 m-1 p-2  rounded-md"

            >
              Announcement
            </button>
          </form>
        </div>
      </div>
      {announcements.map((ann) => (
        <div className="flex flex-wrap justify-between h-13 m-2 p-1 rounded-lg bg-indigo-200">
          <div className="flex flex-wrap justify-start">
            <div className="m-2 bg-white p-1 rounded-2xl">
              <PriorityHighIcon />
            </div>
            <div className="m-2 p-1">{ann.announcementBody}</div>
          </div>
          <div className="m-2">
            <Moment fromNow>
              {new Date(ann.createdAt).toString()}
            </Moment>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignWork;
