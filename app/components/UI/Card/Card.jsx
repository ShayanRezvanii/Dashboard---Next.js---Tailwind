import React from "react";
const Card = ({ title, number, percent, icon, styleIcon,cardStyle }) => {
  return (
    <div className='border w-full h-40 rounded-lg'>
      <div className='p-7'>
        <p className="py-2">{title}</p>
        <div className="flex justify-between">
          <p className="text-4xl font-bold">{number}</p>
          <div className="flex items-center">
            <div className=" flex text-xs font-bold border border-black rounded-2xl px-2">
              <label className="flex items-center">
                <i className={styleIcon}>{icon}</i>
                {percent}%
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
