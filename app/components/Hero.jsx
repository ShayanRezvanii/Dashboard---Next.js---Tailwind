import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Button from "./UI/Button/Button";
import Card from "./UI/Card/Card";
const Hero = ({ data }) => {
  const addCustomer = () => {
    console.log("addCustomer");
  };
  // flex justify-between w-full p-4
  return (
    <div className="flex w-full p-4">
      <div className="block items-start md:flex justify-between w-full">
        <div className="flex items-end">
          <h1 className="font-bold text-4xl">UI Masterclass</h1>
          <h3 className="text-xs p-1">{data.total}</h3>
        </div>

        <div className="flex">
          <div className="flex justify-between text-sm md:text-md py-3 w-full">
            <div>
              {/* <button className="flex items-center bg-white text-black border rounded-lg p-2 hover">
              <i className="px-2">
                <AiOutlineCloudDownload />
              </i>
              Download report
            </button> */}
              <Button
                styles={
                  "flex items-center bg-white text-black rounded-lg hover"
                }
                name={"Download report"}
                icon={<AiOutlineCloudDownload />}
                iconStyle={"px-2"}
              />
            </div>

            <div className="pl-2">
              <Button
                name={"Add customer"}
                styles={
                  "flex bg-black text-white rounded-lg hover:bg-white hover:text-black ease-in transition 0.2s"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
