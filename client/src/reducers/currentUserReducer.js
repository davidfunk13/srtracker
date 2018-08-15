import actionTypes from '../actions/actionTypes';

const initialState = {
    userId: '',
    Battletags: [],
    Err: []
}

export default function currentUserReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                userId: action.data.payload._id,
                Battletags: action.data.payload.Battletags
            }
            case actionTypes.CREATE_BATTLETAG_SUCCESS: 
           return {
                ...state,
                Battletags: [...action.data.payload.Battletags]
            }
            case actionTypes.PURGE_CURRENT_USER:
            return initialState
        default:
            {
                return state;
            }
    }
}