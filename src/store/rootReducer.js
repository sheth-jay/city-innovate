import { combineReducers } from 'redux';

import loginReducer from '../components/Login/redux/reducer';

const combinedReducers = combineReducers({
  login: loginReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;