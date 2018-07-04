import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function activeAccountReducer(state = initialState.activeSeason, action) {
  switch (action.type) {
    case actionTypes.GET_SEASONS_SUCCESS:
      return state.concat(action.data);
      
    default:
      {
        return state;
      }
  }
}