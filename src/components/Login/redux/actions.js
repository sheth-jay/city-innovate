import api from '../../../utils/Api';
import * as actionTypes from './actionTypes';

export const login = (email, password) => ({
  type: actionTypes.LOGIN,
  payload: api.post('/login', { email_address: email, password }),
});