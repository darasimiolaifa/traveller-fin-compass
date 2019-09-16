import { processAmount } from "../utils";
import {
  FETCH_CURRENCIES,
  UPDATE_CONVERSION,
  INVERT_CONVERSION,
  UPDATE_BASE_CURRENCY,
  UPDATE_FOREIGN_CURRENCY,
  LOADING_CONVERSION
} from "./types";

export const fetchCurrencies = async dispatch => {
  const result = await fetch("https://frankfurter.app/currencies");
  const data = await result.json();
  dispatch({
    type: FETCH_CURRENCIES,
    payload: data
  });
  const baseCurrencySelect = document.querySelector("#BASE_CURRENCY");
  const foreignCurrencySelect = document.querySelector("#FOREIGN_CURRENCY");

  const baseCurrency =
    baseCurrencySelect.options[baseCurrencySelect.selectedIndex].value;
  const foreignCurrency =
    foreignCurrencySelect.options[foreignCurrencySelect.selectedIndex].value;

  dispatch({
    type: UPDATE_BASE_CURRENCY,
    payload: baseCurrency
  });
  dispatch({
    type: UPDATE_FOREIGN_CURRENCY,
    payload: foreignCurrency
  });
};

export const doConversion = async (
  dispatch,
  baseCurrency,
  foreignCurrency,
  formAmount
) => {
  if (!formAmount) {
    return dispatch({
      type: UPDATE_CONVERSION,
      payload: {
        processedAmount: "00.00",
        formAmount: "00.00"
      }
    });
  }
  dispatch({ type: LOADING_CONVERSION });
  let processedAmount;
  if (baseCurrency === foreignCurrency) {
    processedAmount = `${foreignCurrency} ${processAmount(formAmount)}`;
    return dispatch({
      type: UPDATE_CONVERSION,
      payload: {
        processedAmount,
        formAmount
      }
    });
  }
  const url = `https://frankfurter.app/latest?amount=${formAmount}&from=${baseCurrency}&to=${foreignCurrency}`;
  let result = await fetch(url);
  result = await result.json();
  const convertedValue = result.rates[foreignCurrency];
  processedAmount = `${foreignCurrency} ${processAmount(convertedValue)}`;
  return dispatch({
    type: UPDATE_CONVERSION,
    payload: {
      processedAmount,
      convertedValue
    }
  });
};

export const invertCurrency = (
  dispatch,
  currentAmount,
  baseCurrency,
  foreignCurrency
) => {
  const invertedAmount = 1 / currentAmount;
  dispatch({
    type: UPDATE_BASE_CURRENCY,
    payload: foreignCurrency
  });
  dispatch({
    type: UPDATE_FOREIGN_CURRENCY,
    payload: baseCurrency
  });
  dispatch({
    type: INVERT_CONVERSION,
    payload: {
      baseCurrency,
      invertedAmount: processAmount(invertedAmount),
      calculatedAmount: invertedAmount
    }
  });
};
