import React from "react";

function Button(props) {
  return (
    <button
      className="bg-linear-to-b from-orange-400 to-orange-600 text-white px-3 py-2 rounded-lg
    md:text-lg text-md hover:scale-105 hover:from-orange-600 transition-all duration-300 cursor-pointer"
    >
      {props.contant}
    </button>
  );
}

export default Button;
