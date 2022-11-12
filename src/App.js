import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import StudentLogin from "./features/Logins/StudentsLogin/StudentLogin";
import TeacherLogin from "./features/Logins/TeacherLogin/TeacherLogin";
import TCourseDetails from "./features/dashboards/TeacherDashboard/TCourseHome/TCourseDetails";
import StudentHome from "./features/dashboards/StudentDashboard/StudentHome";
import CourseDetails from "./features/dashboards/StudentDashboard/CourseDetails/CourseHome/CourseDetails";
import Discussions from "./features/dashboards/StudentDashboard/CourseDetails/Discussions/Discussions";
import AssignWork from "./features/dashboards/StudentDashboard/CourseDetails/AssignWork/AssignWork";
import CourseOutline from "./features/dashboards/StudentDashboard/CourseDetails/Components/CourseOutline";
import MarkSheet from "./features/dashboards/StudentDashboard/CourseDetails/Components/MarkSheet";
import TeacherHome from "./features/dashboards/TeacherDashboard/TeacherHome";
import TCourseOutline from "./features/dashboards/TeacherDashboard/Components/TCourseOutline";
import TMarkSheet from "./features/dashboards/TeacherDashboard/Components/TMarksheet";
import TAssignWork from "./features/dashboards/TeacherDashboard/AssignWork/TAssignWork.jsx";
import TDiscussion from "./features/dashboards/TeacherDashboard/Discussion/TDiscussion";
import QuizHome from "./features/dashboards/StudentDashboard/CourseDetails/Quiz/QuizHome";
import MakeQuiz from "./features/dashboards/TeacherDashboard/MakeQuiz/MakeQuiz";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/student/dashboard" element={<StudentHome />} />
      <Route path="/student/course/details" element={<CourseDetails />} />
      <Route path="/student/course/discussions" element={<Discussions />} />
      <Route path="/student/course/assignwork" element={<AssignWork />} />
      <Route path="/student/course/courseoutline" element={<CourseOutline />} />
      <Route path="/student/course/grades" element={<MarkSheet />} />
      <Route path="/student/course/quiz" element={<QuizHome />} />

      {/* Teachers Routes */}

      <Route path="/login/teacher" element={<TeacherLogin />} />
      <Route path="/teacher/dashboard" element={<TeacherHome />} />
      <Route path="/teacher/course/details" element={<TCourseDetails />} />
      <Route path="/teacher/course/discussions" element={<TDiscussion />} />
      <Route path="/teacher/course/assignwork" element={<TAssignWork />} />
      <Route
        path="/teacher/course/courseoutline"
        element={<TCourseOutline />}
      />
      <Route path="/teacher/course/grades" element={<TMarkSheet />} />
      <Route path="/teacher/course/makequiz" element={<MakeQuiz />} />
    </Routes>
  );
}

export default App;
