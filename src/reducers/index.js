import { combineReducers } from 'redux';

import passwordReducers from './passwordReducers';

const rootReducer = combineReducers({
  passwords: passwordReducers
});

export default rootReducer;