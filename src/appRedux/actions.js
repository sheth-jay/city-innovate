import api from '../utils/Api';
import * as actionTypes from './actionTypes';

export const login = (emailAddress, password) => ({
  type: actionTypes.LOGIN,
  payload: api.post('/sign_in', { user: { email: emailAddress, password }}),
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
  payload: api.delete('/logout'),
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
});

export const getCurrentTaskDetails = (taskId) => ({
  type: actionTypes.GET_CURRENT_TASK_DETAILS,
  payload: api.get(`/tasks/${taskId}`),
});

export const createTask = (values) => {
  const formData = new FormData();
  formData.append('file', values.document.fileList[0].originFileObj);
  return {
  type: actionTypes.CREATE_TASK,
  payload: api.post('/tasks', {
    task: {
      title: values.title,
      description: values.description,
      label_ids: values.labels,
      document: formData,
      user_ids: values.assigned_to,
      due_date: values.due_date,
    }
  }),
}};

export const getTaskLabels = () => ({
  type: actionTypes.GET_TASK_LABELS,
  payload: api.get('/labels'),
});

export const getUsers = () => ({
  type: actionTypes.GET_USERS,
  payload: api.get('/users'),
});