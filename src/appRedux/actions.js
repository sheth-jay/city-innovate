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

export const signup = (firstName, lastName, emailAddress, password, confirmPassword,fileList) => {
  
  const userDetails = new FormData();
  userDetails.append('user[avatar]', fileList);
  userDetails.append('user[first_name]', firstName);
  userDetails.append('user[last_name]', lastName);
  userDetails.append('user[email]', emailAddress);
  userDetails.append('user[password]', password);
  userDetails.append('user[confirm_password]', confirmPassword);
  return {
  type: actionTypes.SIGNUP,
  payload: api.post('/sign_up', userDetails, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}),
}};

export const addFilterItems = (filterListId, filterItems) => ({
  type: actionTypes.ADD_FILTER_ITEMS,
  payload: { filterListId, filterItems },
});

export const getTaskList = (page = 1) => ({
  type: actionTypes.GET_TASK_LIST,
  payload: api.get(`/tasks?page=${page}`),
});

export const filterTaskList = (filterItems) => ({
  type: actionTypes.FILTER_TASK_LIST,
  payload: api.get(`/tasks?labels=[${filterItems.labels}]`),
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

export const markAsComplete = (taskId) => ({
  type: actionTypes.MARK_AS_COMPLETED,
  payload: api.patch(`/tasks/${taskId}/status`, {
    task: {
      status: 'completed'
    }
  })
});

export const getUsersDropdownFilterList = (name) => ({
  type: actionTypes.GET_USERS_DROPDOWN_FILTER_LIST,
  payload: api.get(`${name}`)
});

export const getLabelsDropdownFilterList = (name) => ({
  type: actionTypes.GET_LABELS_DROPDOWN_FILTER_LIST,
  payload: api.get(`${name}`)
});

export const getDocumentsDropdownFilterList = (name) => ({
  type: actionTypes.GET_DOCUMENTS_DROPDOWN_FILTER_LIST,
  payload: api.get(`${name}`)
});

export const getSolicitationsDropdownFilterList = (name) => ({
  type: actionTypes.GET_SOLICITATIONS_DROPDOWN_FILTER_LIST,
  payload: api.get(`${name}`)
});
export const createComment = (comment,id) => {
  return {
  type: actionTypes.CREATE_COMMENT,
  payload: api.post(`/tasks/${id}/comments`, {
    comment: {
      comment:comment
    }
  }),
}};
