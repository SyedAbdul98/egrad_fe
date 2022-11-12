import React from "react";

const MarkSheet = () => {
  return (
    <>
      <div className="m-1 mx-3 font-bold text-lg">Semester - 1</div>
      <div className="h-80 w-full">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-black-500 dark:text-black-400">
            <thead className="text-xs text-black-900 uppercase dark:text-black-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Subject
                </th>
                <th scope="col" className="py-3 px-6">
                  Quizzes
                </th>
                <th scope="col" className="py-3 px-6">
                  Assignments
                </th>
                <th scope="col" className="py-3 px-6">
                  Mid
                </th>
                <th scope="col" className="py-3 px-6">
                  Final
                </th>
                <th scope="col" className="py-3 px-6">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-indigo-100">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-black-900 whitespace-nowrap dark:text-black"
                >
                  Web Engineering
                </th>
                <td className="py-4 px-6">10</td>
                <td className="py-4 px-6">7</td>
                <td className="py-4 px-6">40</td>
                <td className="py-4 px-6">20</td>
                <td className="py-4 px-6">77</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MarkSheet;
