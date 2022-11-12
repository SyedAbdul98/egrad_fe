import React from "react";
import Other from "./Other";
import StudentLoginForm from "./StudentLoginForm";

const StudentLogin = () => {
  return (
    <div className="flex h-screen flex-wrap justify-center">
      <div className="flex h-5/6 w-4/6 flex-wrap justify-center shadow-2xl mt-10">
        <StudentLoginForm />
        <Other />
      </div>
    </div>
  );
};

export default StudentLogin;
