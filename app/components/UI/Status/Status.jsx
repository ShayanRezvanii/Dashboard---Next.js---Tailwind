import React from 'react'
import { GiPlainCircle } from "react-icons/gi";

export const Status = ({status}) => {
  return (
    <div className="flex justify-center text-xs font-bold border border-black rounded-2xl px-2">
    <label className="flex items-center">
      <i className={"p-1"}>{<GiPlainCircle size={10} />}</i>
      {status}
    </label>
  </div>
  )
}
