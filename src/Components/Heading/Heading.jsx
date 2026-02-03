import React from "react";

function Heading(props) {
  return (
    <div className=" w-fit mx-auto">
      <h2 className="md:text-5xl text-[2rem] font-bold">
        {" "}
        <span className="text-orange-500"> {props.highlight}</span> {props.heading} 
      </h2>
      <div className="w-25 h-1 bg-orange-500 md:mt-5  ml-auto"></div>
    </div>
  );
}

export default Heading;
