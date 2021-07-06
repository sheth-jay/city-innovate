import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const INITIAL_STATE = {
  loginRequestState: RequestStates.init,
  loginError: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loginRequestState: RequestStates.loading,
        loginError: null,
      };
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.data.access_token);
      return {
        ...state,
        loginRequestState: RequestStates.success,
        loginError: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginRequestState: RequestStates.error,
        loginError: console.log(action.payload),
      };
    default:
      return state
  }
}