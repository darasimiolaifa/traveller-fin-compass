/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
import React from 'react';

const SelectComponent = ({ options, label }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        {options.map(theOption => <option value={theOption} key={theOption}>{theOption}</option>)}
      </select>
    </div>
  );
};

export default SelectComponent;
