import React from "react";
const Input = ({ inType, searchStyle, placeholder, searchIcon}) => {
  return (
    <div className="flex items-center flex-row relative ">
    <div className="absolute text-gray-400 left-2 hidden md:block">{searchIcon}</div>
    <input type={inType} className={`outline-none rounded-lg border ${searchStyle}`} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
