import { combineReducers } from 'redux';
import conversionReducer from './conversionReducer';
import conversionFormReducer from './conversionFormReducer';

export default combineReducers({
  convert: conversionReducer,
  formData: conversionFormReducer
});
