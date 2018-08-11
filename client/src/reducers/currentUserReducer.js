import actionTypes from '../actions/actionTypes';

const initialState = {
    userID: '',
    auth0UID: '',
    Battletags: [],
    Err: []
}

export default function currentUserReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                userID: action.data._id,
                auth0UID: action.data.auth0UID,
                Battletags: action.data.Battletags
            }
            case actionTypes.PURGE_CURRENT_USER:
            return initialState
        default:
            {
                return state;
            }
    }
}