import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function activeAccountReducer(state = initialState.activeAccount, action) {
  switch (action.type) {
    case actionTypes.SELECT_ACCOUNT:
      return action.data;
    case actionTypes.GET_ACTIVE_ACCOUNT_SUCCESS:
      return action.data
      case actionTypes.CONCAT_NEW_SEASON:
      return {
        ...state,
        Seasons: state.Seasons.concat(action.data)
      }

    default:
      {
        return state;
      }
  }
}