import actionTypes from '../actions/actionTypes';

const initialState = {
    battletagId: '',
    Seasons: [],
    Err: []
}

export default function currentBattletagReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_BATTLETAG_SUCCESS:
            return action.data
        case actionTypes.SAVE_SEASON_SUCCESS:
            return {
                ...state,
                Seasons: action.data.payload.Seasons
            }
        case actionTypes.SAVE_SEASON_FAILURE:
            return {
                ...state,
                Err: [...action.data]
            }
        case actionTypes.DELETE_SEASON_SUCCESS:
            return {
                ...state,
                Seasons: action.data
            }
        case actionTypes.PURGE_CURRENT_USER:
            return initialState
        default:
            {
                return state;
            }
    }
}