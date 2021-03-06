import actionTypes from '../../actions/actionTypes';

const initialState = {
    step: 1,
    matchMap: "",
    heroSelected: "",
    didYouWin: "",
    postMatchSR: "",
    Err: [],
}

export default function gameFormReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_MATCH_MAP:
            return {
                ...state,
                matchMap: action.data,
            }
        case actionTypes.SET_HERO_SELECTED:
            return {
                ...state,
                heroSelected: action.data
            }
        case actionTypes.SET_DID_YOU_WIN:
            return {
                ...state,
                didYouWin: action.data,
            }
        case actionTypes.SET_POST_MATCH_SR:
            return {
                ...state,
                postMatchSR: action.data
            }
        case actionTypes.NEXT_STEP_GAME_FORM:
            return {
                ...state,
                step: state.step + 1,
            }
        case actionTypes.RESET_GAME_FORM:
            return initialState;
        default:
            {
                return state;
            }
    }
}