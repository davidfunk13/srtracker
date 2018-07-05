import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS_SUCCESS:
      return action.data
    case actionTypes.CREATE_USER_SUCCESS:
      return state.concat(action.data)
  
    default:
      {
        return state;
      }
  }
}