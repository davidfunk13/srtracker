import actionTypes from '../actions/actionTypes';
// import initialState from './initialState';

const initialState = {
  accounts: [],
}

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS_SUCCESS:
      return action.data
    case actionTypes.CREATE_USER_SUCCESS:
      return [...state, action.data]
  case actionTypes.DELETE_BATTLETAG_SUCCESS:
   return [...action.data]
    default:
      {
        return state;
      }
  }
}