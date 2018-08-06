import actionTypes from '../actions/actionTypes';

const initialState = {
    accountData: [],
    idForLookup: [],
    seasonData: [],
    seasonIdForLookup: [],
    Err: [],
}

export default function activeAccountReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SELECT_ACCOUNT:
            return {
                ...state,
                idForLookup: action.data
            }
        case actionTypes.SELECT_SEASON:
            return {
                ...state,
                seasonIdForLookup: action.data
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
        case actionTypes.DELETE_ACCOUNT_SUCCESS:
            return {
                ...state,
                accountData: action.data
            }
        case actionTypes.DELETE_ACCOUNT_FAILURE:
            return {
                ...state,
                Err: action.data
            }
        case actionTypes.GET_ACTIVE_SEASON_SUCCESS:
            return {
                ...state,
                seasonData: action.data
            }
        case actionTypes.GET_ACTIVE_SEASON_FAILURE:
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
            case actionTypes.SAVE_GAME_SUCCESS: 
            console.log(action.data)
            return {
                ...state,
                seasonData : {
                    ...state.seasonData,
                    Games: [...action.data.Games]
                }
            }
            case actionTypes.SAVE_GAME_FAILURE: 
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