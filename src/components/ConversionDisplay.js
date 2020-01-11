/* eslint-disable react/prop-types */
import React from "react";

const ConversionDisplay = ({ amount }) => {
  return (
    <section className="conversion-display-section">
      <p>Conversion value is</p>
      <p>{amount}</p>
    </section>
  );
};

export default ConversionDisplay;
