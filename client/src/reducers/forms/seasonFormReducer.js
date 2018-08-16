import actionTypes from '../../actions/actionTypes';

const initialState = {
    step: 1,
    StartingSR: "",
    HerosFocused: [],
    Err: [],
}

export default function seasonFormReducer(state = initialState, action) {
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
                step: state.step + 1,
            }
        case actionTypes.RESET_SEASON_FORM:
            return initialState;
        default:
            {
                return state;
            }
    }
}