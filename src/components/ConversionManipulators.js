/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from "react";

const ConversionManipulators = ({ invertCurrency, resetCurrency }) => {
  return (
    <div className="conversion-display-section-manipulators">
      <span className="invert-conversion" onClick={invertCurrency}>
        Invert conversion
      </span>
      <span className="reset-conversion" onClick={resetCurrency}>
        Reset conversion
      </span>
    </div>
  );
};

export default ConversionManipulators;
