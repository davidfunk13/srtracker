import actionTypes from '../actions/actionTypes';

const initialState = {
    addSeasonForm: {
        step: 1,
        StartingSR: "",
        HerosFocused: []
    }
}

export default function addSeasonFormReducer(state = initialState.addSeasonForm, action) {
    switch (action.type) {
        case actionTypes.SET_STARTING_SR:
        return {
            ...state,
            StartingSR: action.data,
        }
        case actionTypes.SET_HEROS_FOCUSED:
        return {
            ...state,
            HerosFocused: action.data,
        }
        case actionTypes.NEXT_STEP_FORM:
        return {
            ...state,
            step: state.step + 1,
        }
        default:
            {
                return state;
            }
    }
}