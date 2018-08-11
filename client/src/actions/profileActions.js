import actionTypes from './actionTypes';

export function logoutUser() {
    return {
        type: actionTypes.PURGE_PROFILE,
    }
}