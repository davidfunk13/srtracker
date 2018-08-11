import axios from 'axios';
import actionTypes from './actionTypes';

export const createUser = (auth0UID) => {
    return function (dispatch) {
        axios.post('/api/createuser/', { auth0UID })
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
export const purgeCurrentUser = () =>{
    return{
        type: actionTypes.PURGE_CURRENT_USER
    }
}