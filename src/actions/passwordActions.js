import axios from 'axios';
import { ADD_PASSWORD_SUCCESS } from './constants';

export const addPasswordSuccess = (newPassword) => {
  return {
    type: ADD_PASSWORD_SUCCESS,
    payload: newPassword
  }
}

export const addPassword = (newPassword) => {
  const newPasswordWithDate = { ...newPassword, createdAt: new Date().toISOString(), updatedAt: '' }
  return(dispatch) => {
    axios.post(`http://localhost:3000/passwords`, newPasswordWithDate)
    .then(res => dispatch(addPasswordSuccess(res.data)));
  }
}