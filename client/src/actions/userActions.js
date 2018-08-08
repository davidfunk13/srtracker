import axios from 'axios';
import actionTypes from './actionTypes';

export const createUserNode = (uidOBJ) => {
    console.log(uidOBJ)
    return function (dispatch) {
        axios.post('/api/createuser/', {uidOBJ})
        .then(data => {
            dispatch(createUserSuccess(data.data));
        })
        .catch(error => {
            dispatch(createUserFailure(error))
        });
    };
};
export const createUserSuccess = (data) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        data: data,
    }
}
export const createUserFailure = (error) => {
    return {
        type: actionTypes.CREATE_USER_FAILURE,
        error: error,
    }
}
export const currentUserPurge = () => {
    return {
        type: actionTypes.USER_REDUCER_PURGE,
    }
}