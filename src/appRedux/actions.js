import api from '../utils/Api';
import * as actionTypes from './actionTypes';
import taskList from '../components/Taskmanagementtable/tasks.json';

export const login = (emailAddress, password) => ({
  type: actionTypes.LOGIN,
  payload: api.post('/sign_in', { user: { email: emailAddress, password }}),
});

export const signup = (firstName, lastName, emailAddress, password, confirmPassword) => ({
  type: actionTypes.SIGNUP,
  payload: api.post('/sign_up', {
    user: {
      first_name: firstName,
      last_name: lastName,
      email: emailAddress,
      password,
      confirm_password: confirmPassword,
    }
  }),
});

export const addFilterItems = (filterListId, filterItems) => ({
  type: actionTypes.ADD_FILTER_ITEMS,
  payload: { filterListId, filterItems },
});

export const getTaskList = (page = 1) => ({
  type: actionTypes.GET_TASK_LIST,
  payload: api.get(`/tasks?page=${page}`),
})