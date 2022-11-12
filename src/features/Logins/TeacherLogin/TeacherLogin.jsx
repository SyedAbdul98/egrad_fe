import React from "react";
import Other from "./Other";
import TeacherLoginForm from "./TeacherLoginForm";

const TeacherLogin = () => {
  return (
    <div className="flex h-screen flex-wrap justify-center">
      <div className="flex h-5/6 w-4/6 flex-wrap justify-center shadow-2xl mt-10">
        <Other />
        <TeacherLoginForm />
      </div>
    </div>
  );
};

export default TeacherLogin;
