import api from '../../../utils/Api';
import * as actionTypes from './actionTypes';

export const login = (emailAddress, password) => ({
  type: actionTypes.LOGIN,
  payload: api.post('/login', { email_address: emailAddress, password }),
});