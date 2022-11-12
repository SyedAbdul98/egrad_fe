import React, { useEffect } from "react";
import THeader from "../Components/THeader";
import { useLocation } from "react-router-dom";

import TCourseOutlineCard from "../Components/TCourseOutlineCard";
import TGradesCard from "../Components/TGradesCard";

const TCourseDetails = () => {
  const location = useLocation();
  const { user, courseObj } = location.state;
  const {} = location.state;

  useEffect(() => {
    console.log("TCD", user)
  }, [])

  return (
    <>
      <THeader courseObj={courseObj} user={user} />
      <div className="flex flex-wrap justify-start">
        <TCourseOutlineCard courseObj={courseObj} />
        <TGradesCard courseObj={courseObj} />
      </div>
    </>
  );
};

export default TCourseDetails;
