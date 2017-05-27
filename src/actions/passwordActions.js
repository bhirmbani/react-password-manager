import axios from 'axios';
import { ADD_PASSWORD_SUCCESS, GET_PASSWORDS_SUCCESS, DEL_PASSWORD_SUCCESS, EDIT_PASSWORD_SUCCESS } from './constants';

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

export const getPasswordsSuccess = (data) => {
  return {
    type: GET_PASSWORDS_SUCCESS,
    payload: data
  }
}

export const getPasswords = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/passwords')
    .then(res => dispatch(getPasswordsSuccess(res.data)));
  }
}

export const delPasswordSuccess = (id) => {
  return {
    type: DEL_PASSWORD_SUCCESS,
    payload: id
  }
}

export const delPassword = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/passwords/${id}`)
    .then(res => dispatch(delPasswordSuccess(id)));
  }
}

export const editPasswordSuccess = (newPassData) => ({
  type: EDIT_PASSWORD_SUCCESS,
  payload: newPassData
})

export const editPassword = (data) => {
  const newDataWithDate = {
    id: data.id,
    url: data.url,
    username: data.username,
    password: data.password,
    createdAt: data.createdAt,
    updatedAt: new Date().toISOString()
  }
  return (dispatch) => {
    axios.patch(`http://localhost:3000/passwords/${data.id}`, newDataWithDate)
    .then(res => dispatch(editPasswordSuccess(res.data)));
  }
}