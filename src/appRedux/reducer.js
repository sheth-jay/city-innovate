import * as actionTypes from './actionTypes';
import RequestStates from '../utils/request-states';

const INITIAL_STATE = {
  signupRequestState: RequestStates.init,
  signupError: null,
  filterItems: {},
  getTaskListRequestState: RequestStates.init,
  getTaskListSource: null,
  getTaskListError: null,
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
      localStorage.setItem('token', action.payload.data.data.auth_token);
      return {
        ...state,
        loginRequestState: RequestStates.success,
        loginError: null,
        userDetails: action.payload.data.data,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginRequestState: RequestStates.error,
        loginError: console.log(action.payload),
      };
    case actionTypes.SIGNUP_LOADING:
      return {
        ...state,
        signupRequestState: RequestStates.loading,
        signupError: null,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupRequestState: RequestStates.success,
        signupError: null,
      };
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        signupRequestState: RequestStates.error,
        signupError: console.log(action.payload),
      };
      case actionTypes.ADD_FILTER_ITEMS: {
        let filterItems;
        if (action.payload.filterListId) {
          filterItems = {
            ...state.filterItems,
            [action.payload.filterListId]: {
              ...(state.filterItems[action.payload.filterListId] || {}),
              ...action.payload.filterItems,
            },
          };
        } else {
          filterItems = {
            ...state.filterItems,
            ...action.payload.filterItems,
          };
        }
        console.log('>>>filterItems', filterItems)
        return {
          ...state,
          filterItems,
        };
      }
      case actionTypes.GET_TASK_LIST_LOADING:
      return {
        ...state,
        getTaskListRequestState: RequestStates.loading,
        getTaskListSource: action.meta && action.meta.source,
        getTaskListError: null,
      };
    case actionTypes.GET_TASK_LIST_SUCCESS:
      return {
        ...state,
        getTaskListRequestState: RequestStates.success,
        getTaskListSource: null,
        getTaskListError: null,
        taskList: action.payload.data.taskList,
      };
    case actionTypes.GET_TASK_LIST_ERROR:
      return {
        ...state,
        getTaskListRequestState: RequestStates.error,
        getTaskListSource: null,
        getTaskListError: console.log(action.payload),
      };
    default:
      return state
  }
}