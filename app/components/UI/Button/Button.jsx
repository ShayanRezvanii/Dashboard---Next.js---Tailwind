import React from "react";

const Button = ({ click, styles, name, icon, iconStyle }) => {
  return (
    <button onClick={click} className={`border p-2 ${styles} `}>
      <i className={iconStyle}>{icon}</i>
      {name}
    </button>
  );
};

export default Button;
