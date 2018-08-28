import actionTypes from '../actions/actionTypes';

const initialState = {
    Battletag: "",
    StartingSR: "",
    CurrentSR: 0,
    HerosFocused: [],
    Games: [],
    gainedSR: [],
    lostSR: [],
    Err: []
}

export default function currentSeasonReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADJUST_CURRENT_SR_SUCCESS:
        return {
            ...state,
            CurrentSR: action.data,
        }
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
        case actionTypes.SR_GAIN:
        return {
            ...state,
            gainedSR: [...state.gainedSR, action.data]
        }
        case actionTypes.SR_LOST:
        return {
            ...state,
            lostSR: [...state.lostSR, action.data]
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