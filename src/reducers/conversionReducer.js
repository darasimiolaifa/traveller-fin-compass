import {
  FETCH_CURRENCIES,
  UPDATE_CONVERSION,
  INVERT_CONVERSION,
  RESET_CONVERSION,
  LOADING_CONVERSION
} from "../actions/types";

const initialState = {
  currencies: {
    Fetching: "Currencies..."
  },
  conversionLoading: false,
  calculatedAmount: 0,
  displayedAmount: "00.00"
};

const conversionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {
        ...state,
        currencies: action.payload
      };
    case LOADING_CONVERSION:
      return { ...state, conversionLoading: true };
    case UPDATE_CONVERSION:
      return {
        ...state,
        displayedAmount: action.payload.processedAmount,
        calculatedAmount: action.payload.convertedValue,
        conversionLoading: false
      };
    case INVERT_CONVERSION:
      return {
        ...state,
        displayedAmount: `${action.payload.baseCurrency} ${action.payload.invertedAmount}`,
        calculatedAmount: action.payload.calculatedAmount
      };
    case RESET_CONVERSION:
      return {
        ...state,
        displayedAmount: action.payload
      };
    default:
      return state;
  }
};

export default conversionReducer;
