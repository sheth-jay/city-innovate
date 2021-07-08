import { combineReducers } from 'redux';

import appReducer from '../appRedux/reducer';

const combinedReducers = combineReducers({
  app: appReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;