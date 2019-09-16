import React from 'react';
import ConversionDisplay from './ConversionDisplay';
import ConversionManipulators from './ConversionManipulators';
import Button from './Button';
import SelectComponent from './SelectComponent';

const ConversionForm = () => {
  return (
    <section className="conversion-form-section">
      <h1>Convert currency</h1>
      <form className="conversion-form-section-form">
        <SelectComponent label="Base Currency" options={['NGN', 'USD', 'EUR', 'GBP']} />
        <SelectComponent label="Foreign Currency" options={['USD', 'NGN', 'EUR', 'GBP']} />
        <label>Conversion amount</label>
        <input type="text" placeholder="Enter amount to convert e.g 5000"/>
        <Button className="conversion-form-section-button" text="Convert" />
      </form>
      <ConversionDisplay />
      <ConversionManipulators />
    </section>
  );
};

export default ConversionForm;
