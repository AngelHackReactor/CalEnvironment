import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import locationReducer from './locationReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  form: formReducer,
  location: locationReducer,
  data: dataReducer
});

export default rootReducer;
