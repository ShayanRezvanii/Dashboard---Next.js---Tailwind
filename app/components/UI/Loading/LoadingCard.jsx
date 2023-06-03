import React from "react";

const LoadingCard = () => {
  return (
    <div className="border border-slate shadow rounded-md p-7 w-full mx-auto h-40  ">
      <div className="animate-pulse flex space-x-4 ">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 w-[30%] bg-slate-700 rounded"></div>
          <div className="space-y-2">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 w-[60%] rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 w-[50%] rounded col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
 