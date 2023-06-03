import React from "react";

export const Progress = ({ progressWidth }) => {
  return (
    <div className="w-[30] rounded-full bg-gray-300">
      <div
        className="bg-gray-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
        style={{ width: `${progressWidth}` }}
      >
        {progressWidth}
      </div>
    </div>
  );
};
