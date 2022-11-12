import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
const Discussions = () => {
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [discussions, setDiscussions] = useState([]);
  const location = useLocation();
  const { courseObj, user } = location.state;

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("hn", message);
    console.log("u", user);
    console.log("c", courseObj);
    console.log("O", {
      userName: user.user.studentName,
      userId: user.user._id,
      courseName: courseObj.courseName,
      courseId: courseObj._id,
      message: message,
    });
    sendMessage();
  };

  const sendMessage = async () => {
    const data = await axios.post(
      "http://localhost:8080/discussion/send_message",
      { senderName, courseName, message }
    );
    console.log(data);
  };

  const recieveMessage = async (courseName) => {
    const res = await axios.post(
      "http://localhost:8080/discussion/get_message",
      { courseName }
    );
    console.log(res.data);
    setDiscussions(res.data);
  };
  useEffect(() => {
    console.log("message");
    console.log("u", user);
    setSenderName(user.user.studentName);
    setCourseName(courseObj.courseName);
    recieveMessage(courseObj.courseName);
    console.log("disc", discussions);
  }, []);

  return (
    <div className=" h-screen relative">
      <div>
        <Header courseObj={courseObj} />
      </div>
      <div className=" overflow-auto " style={{ height: "84vh" }}>
        {discussions.map((msg) =>
          msg.senderName == user.user.studentName ? (
            <div className="flex flex-wrap flex-col m-2 p-1 h-max w-max rounded justify-start float-right clear-both relative shadow-lg bg-indigo-200">
              <div className="flex flex-wrap justify-between">
                <h6 className="font-bold m-1">{msg.senderName}</h6>
                <p className="font-sm m-1">
                  <Moment fromNow>{new Date(msg.createdAt).toString()}</Moment>
                </p>
              </div>
              <p className="m-1">{msg.message}</p>
            </div>
          ) : (
            <div className="flex flex-wrap flex-col m-2 p-1 h-max bg-white w-max rounded justify-start float-left clear-both relative shadow-lg">
              <div className="flex flex-wrap justify-between">
                <h6 className="font-bold m-1">{msg.senderName}</h6>
                <p className="font-sm m-1">
                  <Moment fromNow>{new Date(msg.createdAt).toString()}</Moment>
                </p>
              </div>
              <p className="m-1">{msg.message}</p>
            </div>
          )
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <form className="flex flex-wrap justify-start">
          <input
            type="text"
            className="flex flex-grow m-1 border-2 border-black"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleSendMessage}
            className="bg-indigo-500 m-1 p-2  rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Discussions;
