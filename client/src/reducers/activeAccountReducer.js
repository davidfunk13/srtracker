import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function activeAccountReducer(state = initialState.activeAccount, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACCOUNT_SUCCESS:
      return action.data;
    default:
      {
        return state;
      }
  }
}