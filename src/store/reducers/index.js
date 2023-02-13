import { combineReducers } from 'redux';
import formReducer from './form';
import pingReducer from './pingpong';

// define reducer list
const rootReducers = combineReducers({
  ping: pingReducer,
  form: formReducer
});

export default rootReducers;
