/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from "react";

const SelectComponent = ({ options, label, handleChange, id, selected }) => {
  return (
    <div>
      <label>{label}</label>
      <select
        value={selected}
        id={id}
        className={"select"}
        name={id}
        onChange={handleChange}
      >
        {options.map(theOption => (
          <option
            value={theOption[0]}
            key={theOption[0]}
          >{`${theOption[0]} - ${theOption[1]}`}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
