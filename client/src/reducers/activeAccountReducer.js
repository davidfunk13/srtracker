import actionTypes from '../actions/actionTypes';

const initialState = {
    accountData: [],
    idForLookup: [],
    Err: [],
}

export default function activeAccountReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_ACCOUNT:
            return {
                ...state,
                idForLookup: action.data
            }
        case actionTypes.GET_ACTIVE_ACCOUNT_SUCCESS:
            return {
                ...state,
                accountData: action.data
            }
        case actionTypes.GET_ACTIVE_ACCOUNT_FAILURE:
            return {
                ...state,
                Err: action.data
            }
            case actionTypes.SAVE_SEASON_SUCCESS: 
            return {
                ...state,
                accountData : {
                    ...state.accountData,
                    Seasons: [...action.data.Seasons]
                }
            }
            case actionTypes.SAVE_SEASON_FAILURE: 
            return {
                ...state,
                Err: action.data,
            }
        default:
            {
                return state;
            }
    }
}