import {combineReducers} from 'redux';

import {ERR_MSG, AUTH_SUCCESS, RESET_USER, UPDATE_USER} from '../action-types';

import {getRedirectPath} from '../utils';

const initUserState = {
  username: '',
  type: '',
  msg: '',
  redirectTo: ''
};


function user(preState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        username: action.data.username,
        type: action.data.type,
        msg: '',
        redirectTo: getRedirectPath(action.data.type, action.data.header)
      }
    case  ERR_MSG:
      return {...action.data};
    case  UPDATE_USER:
      return action.data
    case  RESET_USER:
      return {...action.data}
    default:
      return preState;
    
  }
}


export  default combineReducers({
  user
})

