import actionTypes from '../actions/actionTypes';

const initialState = {
    Battletag: "",
    StartingSR: "",
    HerosFocused: [],
    Games: [],
    Err: []
}

export default function currentSeasonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_SEASON_SUCCESS:
            return action.data
        case actionTypes.SELECT_SEASON_FAILURE:
            return {
                ...state,
                Err: [action.data]
            }
        case actionTypes.SAVE_GAME_SUCCESS:
            return {
                ...state,
                Games: action.data.payload.Games
            }
        case actionTypes.DELETE_GAME_SUCCESS:
            return action.data
        case actionTypes.PURGE_CURRENT_SEASON:
            return initialState
        default:
            {
                return state;
            }
    }
}