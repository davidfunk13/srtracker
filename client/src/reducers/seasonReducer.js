import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function seasonReducer(state = initialState.addSeasonForm, action) {
  switch (action.type) {
    case actionTypes.SET_STARTING_SR:
      return {
        ...state,
        StartingSR: action.data,
      }
    case actionTypes.NEXT_STEP_FORM:
      return {
        ...state,
        step: state.step + 1,
      }
    case actionTypes.SET_HEROS_FOCUSED:
      return {
        ...state,
        HerosFocused: state.HerosFocused.concat(action.data)
      }
      case actionTypes.SAVE_SEASON_SUCCESS:
      return{
        ...state
      }
    default:
      {
        return state;
      }
  }
}