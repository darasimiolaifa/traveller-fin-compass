/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ className, text }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
