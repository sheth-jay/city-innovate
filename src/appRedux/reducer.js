import * as actionTypes from './actionTypes';
import RequestStates from '../utils/request-states';

const INITIAL_STATE = {
  loginRequestState: RequestStates.init,
  loginError: null,
  userDetails: [],
  logoutRequestState: RequestStates.init,
  logoutError: null,
  signupRequestState: RequestStates.init,
  signupError: null,
  filterItems: {},
  getTaskListRequestState: RequestStates.init,
  getTaskListSource: null,
  getTaskListError: null,
  taskList: [],
  taskListMetadata: {},
  currentTaskDetails: {},
  getCurrentTaskDetailsRequestState: RequestStates.init,
  getCurrentTaskDetailsSource: null,
  getCurrentTaskDetailsError: null,
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
        userDetails: action.payload.data.data || [],
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginRequestState: RequestStates.error,
        loginError: action.payload.response.data.errors,
      };
    case actionTypes.LOGOUT_LOADING:
      return {
        ...state,
        logoutRequestState: RequestStates.loading,
        logoutError: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        logoutRequestState: RequestStates.success,
        logoutError: null,
        userDetails: [],
      };
    case actionTypes.LOGOUT_ERROR:
      return {
        ...state,
        logoutRequestState: RequestStates.error,
        logoutError: action.payload.response.data.errors,
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
        signupError: action.payload.response.data.errors,
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
        taskList: [
          ...action.payload.data.data || [],
        ],
        taskListMetadata: {
          ...state.taskListMetadata,
          ...action.payload.data.meta_key,
        }
      };
    case actionTypes.GET_TASK_LIST_ERROR:
      return {
        ...state,
        getTaskListRequestState: RequestStates.error,
        getTaskListSource: null,
        getTaskListError: action.payload.response.data.errors,
      };
    case actionTypes.FILTER_TASK_LIST_LOADING:
      return {
        ...state,
        filterTaskListRequestState: RequestStates.loading,
        filterTaskListSource: action.meta && action.meta.source,
        filterTaskListError: null,
      };
    case actionTypes.FILTER_TASK_LIST_SUCCESS:
      return {
        ...state,
        filterTaskListRequestState: RequestStates.success,
        filterTaskListSource: null,
        filterTaskListError: null,
        taskList: [
          ...action.payload.data.data,
        ],
        taskListMetadata: {
          ...state.taskListMetadata,
          ...action.payload.data.meta_key,
        }
      };
    case actionTypes.FILTER_TASK_LIST_ERROR:
      return {
        ...state,
        filterTaskListRequestState: RequestStates.error,
        filterTaskListSource: null,
        filterTaskListError: action.payload.response.data.errors,
      };
    case actionTypes.FILTER_TASK_BY_QUERY_LOADING:
      return {
        ...state,
        filterTaskByQueryRequestState: RequestStates.loading,
        filterTaskByQuerySource: action.meta && action.meta.source,
        filterTaskByQueryError: null,
      };
    case actionTypes.FILTER_TASK_BY_QUERY_SUCCESS:
      return {
        ...state,
        filterTaskByQueryRequestState: RequestStates.success,
        filterTaskByQuerySource: null,
        filterTaskByQueryError: null,
        taskList: [
          ...action.payload.data.data,
        ],
        taskListMetadata: {
          ...state.taskListMetadata,
          ...action.payload.data.meta_key,
        }
      };
    case actionTypes.FILTER_TASK_BY_QUERY_ERROR:
      return {
        ...state,
        filterTaskByQueryRequestState: RequestStates.error,
        filterTaskByQuerySource: null,
        filterTaskByQueryError: action.payload.response.data.errors,
      };
      case actionTypes.GET_CURRENT_TASK_DETAILS_LOADING:
      return {
        ...state,
        getCurrentTaskDetailsRequestState: RequestStates.loading,
        getCurrentTaskDetailsSource: action.meta && action.meta.source,
        getCurrentTaskDetailsError: null,
      };
    case actionTypes.GET_CURRENT_TASK_DETAILS_SUCCESS:
      return {
        ...state,
        getCurrentTaskDetailsRequestState: RequestStates.success,
        getCurrentTaskDetailsSource: null,
        getCurrentTaskDetailsError: null,
        currentTaskDetails: action.payload.data.data,
      };
    case actionTypes.GET_CURRENT_TASK_DETAILS_ERROR:
      return {
        ...state,
        getCurrentTaskDetailsRequestState: RequestStates.error,
        getCurrentTaskDetailsSource: null,
        getCurrentTaskDetailsError: action.payload.response.data.errors,
      };
    case actionTypes.GET_TASK_LABELS_LOADING:
      return {
        ...state,
        getTaskLabelRequestState: RequestStates.loading,
        getTaskLabelSource: action.meta && action.meta.source,
        getTaskLabelError: null,
      };
    case actionTypes.GET_TASK_LABELS_SUCCESS:
      return {
        ...state,
        getTaskLabelRequestState: RequestStates.success,
        getTaskLabelSource: null,
        getTaskLabelError: null,
        taskLabels: action.payload.data.data,
      };
    case actionTypes.GET_TASK_LABELS_ERROR:
      return {
        ...state,
        getTaskLabelRequestState: RequestStates.error,
        getTaskLabelSource: null,
        getTaskLabelError: action.payload.response.data.errors,
      };
    case actionTypes.GET_USERS_LOADING:
      return {
        ...state,
        getUsersRequestState: RequestStates.loading,
        getUsersSource: action.meta && action.meta.source,
        getUsersError: null,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        getUsersRequestState: RequestStates.success,
        getUsersSource: null,
        getUsersError: null,
        users: action.payload.data.data || [],
      };
    case actionTypes.GET_USERS_ERROR:
      return {
        ...state,
        getUsersRequestState: RequestStates.error,
        getUsersSource: null,
        getUsersError: action.payload.response.data.errors,
      };
    case actionTypes.MARK_AS_COMPLETED_LOADING:
      return {
        ...state,
        markAsCompletedRequestState: RequestStates.loading,
        markAsCompletedSource: action.meta && action.meta.source,
        markAsCompletedError: null,
      };
    case actionTypes.MARK_AS_COMPLETED_SUCCESS:
      return {
        ...state,
        markAsCompletedRequestState: RequestStates.success,
        markAsCompletedSource: null,
        markAsCompletedError: null,
        currentTaskDetails: {
          ...state.currentTaskDetails,
          status: "completed",
        },
      };
    case actionTypes.MARK_AS_COMPLETED_ERROR:
      return {
        ...state,
        markAsCompletedRequestState: RequestStates.error,
        markAsCompletedSource: null,
        markAsCompletedError: action.payload.response.data.errors,
      };
    case actionTypes.GET_USERS_DROPDOWN_FILTER_LIST_LOADING:
      return {
        ...state,
        getDropdownFilterListRequestState: RequestStates.loading,
        getDropdownFilterListSource: action.meta && action.meta.source,
        getDropdownFilterListError: null,
      };
    case actionTypes.GET_USERS_DROPDOWN_FILTER_LIST_SUCCESS:
      return {
        ...state,
        getDropdownFilterListRequestState: RequestStates.success,
        getDropdownFilterListSource: null,
        getDropdownFilterListError: null,
        usersFilterList: action.payload.data.data,
      };
    case actionTypes.GET_USERS_DROPDOWN_FILTER_LIST_ERROR:
      return {
        ...state,
        getDropdownFilterListRequestState: RequestStates.error,
        getDropdownFilterListSource: null,
        getDropdownFilterListError: action.payload.response.data.errors,
      };
    case actionTypes.GET_LABELS_DROPDOWN_FILTER_LIST_LOADING:
      return {
        ...state,
        getLabelsDropdownFilterListRequestState: RequestStates.loading,
        getLabelsDropdownFilterListSource: action.meta && action.meta.source,
        getLabelsDropdownFilterListError: null,
      };
    case actionTypes.GET_LABELS_DROPDOWN_FILTER_LIST_SUCCESS:
      return {
        ...state,
        getLabelsDropdownFilterListRequestState: RequestStates.success,
        getLabelsDropdownFilterListSource: null,
        getLabelsDropdownFilterListError: null,
        labelsFilterList: action.payload.data.data,
      };
    case actionTypes.GET_LABELS_DROPDOWN_FILTER_LIST_ERROR:
      return {
        ...state,
        getLabelsDropdownFilterListRequestState: RequestStates.error,
        getLabelsDropdownFilterListSource: null,
        getLabelsDropdownFilterListError: action.payload.response.data.errors,
      };
    case actionTypes.GET_DOCUMENTS_DROPDOWN_FILTER_LIST_LOADING:
      return {
        ...state,
        getDocumentsDropdownFilterListRequestState: RequestStates.loading,
        getDocumentsDropdownFilterListSource: action.meta && action.meta.source,
        getDocumentsDropdownFilterListError: null,
      };
    case actionTypes.GET_DOCUMENTS_DROPDOWN_FILTER_LIST_SUCCESS:
      return {
        ...state,
        getDocumentsDropdownFilterListRequestState: RequestStates.success,
        getDocumentsDropdownFilterListSource: null,
        getDocumentsDropdownFilterListError: null,
        documentsFilterList: action.payload.data.data,
      };
    case actionTypes.GET_DOCUMENTS_DROPDOWN_FILTER_LIST_ERROR:
      return {
        ...state,
        getDocumentsDropdownFilterListRequestState: RequestStates.error,
        getDocumentsDropdownFilterListSource: null,
        getDocumentsDropdownFilterListError: action.payload.response.data.errors,
      };
    case actionTypes.GET_SOLICITATIONS_DROPDOWN_FILTER_LIST_LOADING:
      return {
        ...state,
        getSolicitationsDropdownFilterListRequestState: RequestStates.loading,
        getSolicitationsDropdownFilterListSource: action.meta && action.meta.source,
        getSolicitationsDropdownFilterListError: null,
      };
    case actionTypes.GET_SOLICITATIONS_DROPDOWN_FILTER_LIST_SUCCESS:
      return {
        ...state,
        getSolicitationsDropdownFilterListRequestState: RequestStates.success,
        getSolicitationsDropdownFilterListSource: null,
        getSolicitationsDropdownFilterListError: null,
        solicitationsFilterList: action.payload.data.data,
      };
    case actionTypes.GET_SOLICITATIONS_DROPDOWN_FILTER_LIST_ERROR:
      return {
        ...state,
        getSolicitationsDropdownFilterListRequestState: RequestStates.error,
        getSolicitationsDropdownFilterListSource: null,
        getSolicitationsDropdownFilterListError: action.payload.response.data.errors,
      };
    default:
      return state
  }
}