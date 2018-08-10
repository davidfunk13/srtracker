import actionTypes from '../actions/actionTypes';
// import initialState from './initialState';

const initialState = {
  accounts: [],
}

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case actionTypes.GET_ACCOUNTS_SUCCESS:
      return action.data
    case actionTypes.CREATE_BATTLETAG_SUCCESS:
    return action.data
    case actionTypes.DELETE_BATTLETAG_SUCCESS:
      return [...action.data]
    case actionTypes.ACCOUNTS_REDUCER_PURGE:
    return initialState
    default:
      {
        return state;
      }
  }
}