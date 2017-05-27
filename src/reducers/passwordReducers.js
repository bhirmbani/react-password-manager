import { ADD_PASSWORD_SUCCESS } from '../actions/constants';

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
  const createdAt = new Date();
  const newPasswordData = {
    id: newId,
    url: url,
    username: username,
    password: password,
    createdAt: createdAt.toISOString(),
    updatedAt: ''
  }
  const newState = [...state, newPasswordData]
  return newState;
}

const passwordReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PASSWORD_SUCCESS: return addPassword(state, action.payload);
    default: return state;
  }
}

export default passwordReducer;