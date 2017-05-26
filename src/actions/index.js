import axios from 'axios';

export const addPasswordSuccess = (newPassword) => {
  return {
    type: 'ADD_PASSWORD_SUCCESS',
    payload: newPassword
  }
}

export const addPassword = (newPassword) => {
  const newPasswordWithDate = { ...newPassword, createdAt: new Date().toISOString(), updatedAt: '' }
  return(dispatch) => {
    axios.post(`http://localhost:3000/favoritePhotos`, newPasswordWithDate)
    .then(res => dispatch(addPasswordSuccess(res.data)));
  }
}