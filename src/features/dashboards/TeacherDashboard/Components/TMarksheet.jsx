import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const TMarkSheet = () => {
  const location = useLocation();
  const { courseObj } = location.state;
  const [studentsMarks, setStudentsMarks] = useState([]);
  // const studentsMarks = [
  //   {
  //     courseName: "Abdul R",
  //     marks: [10, 7, 40, 20, 77],
  //   },
  //   {
  //     courseName: "Moeez H",
  //     marks: [10, 7, 40, 20, 77],
  //   },
  //   {
  //     courseName: "Awais H",
  //     marks: [10, 7, 40, 20, 77],
  //   },
  // ];

  const getMarks = async (courseName) => {
    const marksData = await axios.post(
      "http://localhost:8080/marks/get_marks",
      { courseName }
    );
    setStudentsMarks(marksData.data);
  };
  useEffect(() => {
    getMarks(courseObj.courseName);
  }, []);
  return (
    <>
      <div className="m-1 mx-3 font-normal text-lg">
        This is based on the results you provided, If any issue please email
       <strong> serverroom@gcu.com</strong> with student name and issue
      </div>
      <div className="h-80 w-full">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
            <thead className="text-xs text-black-900 uppercase dark:text-black-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Student Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Roll Number
                </th>
                <th scope="col" className="py-3 px-6">
                  Quiz Marks
                </th>
                {/* <th scope="col" className="py-3 px-6">
                  Mid
                </th>
                <th scope="col" className="py-3 px-6">
                  Final
                </th>
                <th scope="col" className="py-3 px-6">
                  Total
                </th> */}
              </tr>
            </thead>
            <tbody>
              {studentsMarks.map((obj) => (
                <tr className="bg-white dark:bg-indigo-100">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-black-900 whitespace-nowrap dark:text-black"
                  >
                    {obj.studentName}
                  </th>
                  <td className="py-4 px-6">{obj.rollNumber}</td>
                  <td className="py-4 px-6">{obj.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TMarkSheet;
