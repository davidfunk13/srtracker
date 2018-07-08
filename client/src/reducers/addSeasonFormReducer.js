import actionTypes from '../actions/actionTypes';

const initialState = {
    addSeasonForm: {
        seasonFormStep: 1,
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
        case actionTypes.NEXT_STEP_SEASON_FORM:
        return {
            ...state,
            seasonFormStep: state.seasonFormStep + 1,
        }
        case actionTypes.CLOSE_MODAL:
        return {
            ...state,
            seasonFormStep: 1,
        }
        default:
            {
                return state;
            }
    }
}