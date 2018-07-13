import actionTypes from '../actions/actionTypes';

const initialState = {
    addSeasonForm: {
        seasonFormStep: 1,
        StartingSR: "",
        HerosFocused: [],
        Err: [],
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
            let hero = action.data;
            if (state.HerosFocused.includes(hero)) {
                console.log('yes')
                return {
                    ...state,
                    Err: 'Hero Already Selected!'
                }
            }
            else {
                return {
                    ...state,
                    HerosFocused: [...state.HerosFocused, action.data]
                }
            }
          

        case actionTypes.NEXT_STEP_SEASON_FORM:
            return {
                ...state,
                seasonFormStep: state.seasonFormStep + 1,
            }
        case actionTypes.RESET_SEASON_FORM:
        return initialState.addSeasonForm;
        // case actionTypes.CLOSE_MODAL:
        //     return {
        //         initialState
        //     }
        default:
            {
                return state;
            }
    }
}