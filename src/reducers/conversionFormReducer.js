import { UPDATE_BASE_CURRENCY, UPDATE_FOREIGN_CURRENCY, UPDATE_FORM_AMOUNT } from '../actions/types';

const initialState = {
  baseCurrency: '',
  foreignCurrency: '',
  formAmount: ''
};

const conversionFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.payload
      };
    case UPDATE_FOREIGN_CURRENCY:
      return {
        ...state,
        foreignCurrency: action.payload
      };
    case UPDATE_FORM_AMOUNT:
      return {
        ...state,
        formAmount: action.payload
      };
    default:
      return state;
  }
};

export default conversionFormReducer;
