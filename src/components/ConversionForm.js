import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ConversionDisplay from "./ConversionDisplay";
import ConversionManipulators from "./ConversionManipulators";
import Button from "./Button";
import SelectComponent from "./SelectComponent";
import {
  fetchCurrencies,
  doConversion,
  invertCurrency
} from "../actions/currencyActions";

const ConversionForm = () => {
  const dispatch = useDispatch();
  const {
    currencies,
    calculatedAmount,
    displayedAmount,
    formAmount,
    baseCurrency,
    foreignCurrency,
    conversionLoading
  } = useSelector(state => ({
    ...state.convert,
    ...state.formData
  }));

  const handleChange = e => {
    dispatch({
      type: `UPDATE_${e.target.name}`,
      payload: e.target.value
    });
  };

  const handleSubmit = async () => {
    doConversion(dispatch, baseCurrency, foreignCurrency, formAmount);
  };

  const handleInversion = () => {
    invertCurrency(dispatch, calculatedAmount, baseCurrency, foreignCurrency);
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_CONVERSION",
      payload: "00.00"
    });
    dispatch({
      type: "UPDATE_FORM_AMOUNT",
      payload: ""
    });
  };

  useEffect(() => {
    fetchCurrencies(dispatch);
  }, []);

  return (
    <section className="conversion-form-section">
      <h1>Convert currency</h1>
      <form className="conversion-form-section-form">
        <SelectComponent
          id="BASE_CURRENCY"
          label="Base Currency"
          options={Object.entries(currencies)}
          selected={baseCurrency}
          handleChange={handleChange}
        />
        <SelectComponent
          id="FOREIGN_CURRENCY"
          label="Foreign Currency"
          selected={foreignCurrency}
          options={Object.entries(currencies)}
          handleChange={handleChange}
        />
        <label>Conversion amount</label>
        <input
          name="FORM_AMOUNT"
          type="text"
          value={formAmount}
          placeholder="Enter amount to convert e.g 5000"
          onChange={handleChange}
        />
        <Button
          className="conversion-form-section-button"
          text={conversionLoading ? "Converting..." : "Convert"}
          handleClick={handleSubmit}
        />
      </form>
      <ConversionDisplay amount={displayedAmount} />
      <ConversionManipulators
        invertCurrency={handleInversion}
        resetCurrency={handleReset}
      />
    </section>
  );
};

export default ConversionForm;
