import { combineReducers } from 'redux';
import formReducer from './formReducer';
import googleMapReducers from './googleMapReducer';

// define reducer list
const rootReducers = combineReducers({
  form: formReducer,
  googleMap: googleMapReducers
});

export default rootReducers;
