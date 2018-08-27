import axios from 'axios';
import actionTypes from './actionTypes';

export const createUser = (auth0UID) => {
    return function (dispatch) {
        console.log(auth0UID)
        axios.post('/api/user/create/', auth0UID )
            .then(data => {
                console.log(data.data)
                dispatch(createUserSuccess(data.data));
            })
            .catch(error => {
                dispatch(createUserFailure(error))
            });
    };
}
export const createUserSuccess = (success) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        data: success
    }
}
export const createUserFailure = (failure) => {
    return {
        type: actionTypes.CREATE_USER_FAILURE,
        data: failure
    }
}
export const deleteBattletag = (battletagId, userId) => {
    return function (dispatch) {
        console.log(battletagId, userId)
        axios.get('/api/battletags/remove/', {params: {
            battletagId: battletagId,
            userId: userId
        }} )
            .then(data => {
                console.log(data.data)
                dispatch(deleteBattletagSuccess(data.data));
            })
            .catch(error => {
                dispatch(deleteBattletagFailure(error))
            });
    };
}
export const deleteBattletagSuccess = (success) => {
    return {
        type: actionTypes.DELETE_BATTLETAG_SUCCESS,
        data: success
    }
}
export const deleteBattletagFailure = (failure) => {
    return {
        type: actionTypes.DELETE_BATTLETAG_FAILURE,
        data: failure
    }
}
export const purgeCurrentUser = () =>{
    return {
        type: actionTypes.PURGE_CURRENT_USER
    }
}