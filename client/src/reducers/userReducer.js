import actionTypes from '../actions/actionTypes';
// import initialState from './initialState';

const initialState = {
  currentUser: [],
}

export default function userReducer(state = initialState.currentUser, action) {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
    return action.data
  case actionTypes.CREATE_USER_FAILURE:
  return action.data
    default:
      {
        return state;
      }
  }
}