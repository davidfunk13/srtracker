import actionTypes from '../actions/actionTypes';

const initialState = {
    battletagId: '',
    Seasons: [],
    Err: []
}

export default function currentBattletagReducer(state = initialState, action) {
    switch (action.type) {
            case actionTypes.SELECT_BATTLETAG:
            return {
                ...state,
                battletagId: action.data
            }
            case actionTypes.SELECT_BATTLETAG_SUCCESS: 
            return action.data
            case actionTypes.PURGE_CURRENT_USER:
            return initialState
        default:
            {
                return state;
            }
    }
}