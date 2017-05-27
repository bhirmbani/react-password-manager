import { ADD_PASSWORD_SUCCESS, GET_PASSWORDS_SUCCESS, DEL_PASSWORD_SUCCESS, EDIT_PASSWORD_SUCCESS } from '../actions/constants';
import { fromNow, year } from '../helpers/';

const initialState = [];

const addPassword = (state, data) => {
  let maxId = 0;
  const url = data.url;
  const username = data.username;
  const password = data.password;
  const ids = state.map(data => data.id);
  if(state.length !== 0) {
    maxId = Math.max(...ids);
  }
  const newId = maxId + 1;
  const createdAt = year(new Date);
  const newPasswordData = {
    id: newId,
    url: url,
    username: username,
    password: password,
    createdAt: createdAt,
    updatedAt: ''
  }
  const newState = [...state, newPasswordData]
  return newState;
}

const getPasswords = (state, passwords) => {
  return passwords;
}

const delData = (state, id) => {
  const newState = state.filter(data => data.id !== id);
  return newState;
}

const editPassword = (state, updatedPass) => {
  const updatedAt = new Date();
  const newState = state.map(data => {
    if(data.id === updatedPass.id) {
      return {
        id: data.id,
        url: updatedPass.url,
        username: updatedPass.username,
        password: updatedPass.password,
        createdAt: data.createdAt,
        updatedAt: updatedAt
      };
    }
    return data;
  });
  return newState;
}

const passwordReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PASSWORD_SUCCESS: return addPassword(state, action.payload);
    case GET_PASSWORDS_SUCCESS: return getPasswords(state, action.payload);
    case DEL_PASSWORD_SUCCESS: return delData(state, action.payload);
    case EDIT_PASSWORD_SUCCESS: return editPassword(state, action.payload);
    default: return state;
  }
}



export default passwordReducer;