import { combineReducers } from 'redux';
import ships from './ships';
import cart from './cart';


export default combineReducers({//rootReducer
  ships,
  cart
});
