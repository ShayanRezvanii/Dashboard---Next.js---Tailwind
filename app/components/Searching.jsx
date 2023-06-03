import React from "react";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Searching = ({ all, emolled, active, unemolled }) => {
  return (
    <div className="flex justify-center md:justify-between w-full p-4  ">
      <div className="">
        <Button
          click={all}
          name={"View all"}
          styles={
            "rounded-tl-lg bg-black text-white ease-in transition 0.2s outline:none focus:bg-black focus:text-white "
          }
        />
        <Button
          click={emolled}
          name={"Emolled"}
          styles={
            "hover:border-b-black ease-in transition 0.2s outline:none focus:border-b-black"
          }
        />
        <Button
          click={active}
          name={"Active now"}
          styles={
            "hover:border-b-black ease-in transition 0.2s outline:none focus:border-b-black "
          }
        />
        <Button
          click={unemolled}
          name={"Unemolled"}
          styles={
            "rounded-tr-lg hover:border-b-black ease-in transition 0.2s outline:none focus:border-b-black"
          }
        />
      </div>

      <div>
        <Input
          inType={"text"}
          searchStyle={"hidden md:block h-10 px-9 left-5 w-96"}
          placeholder={"Search"}
          searchIcon={<AiOutlineSearch size={20} />}
        />
      </div>
    </div>
  );
};

export default Searching;
