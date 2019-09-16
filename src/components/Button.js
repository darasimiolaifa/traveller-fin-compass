/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ className, text, handleClick }) => {
  return (
    <div className={className} onClick={handleClick}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
