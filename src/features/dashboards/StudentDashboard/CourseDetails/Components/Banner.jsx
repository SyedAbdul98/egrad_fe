import React from "react";

const Banner = ({heading, subHeading}) => {
  return (
    <div className="m-2 h-20 bg-white p-2 mt-5 shadow-sm rounded-lg">
      <span className="text-dark font-bold text-xl block ">{heading}</span>
      <span>{subHeading}</span>
    </div>
  );
};

export default Banner;
