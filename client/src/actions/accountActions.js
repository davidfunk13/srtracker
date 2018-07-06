import axios from 'axios';
import actionTypes from './actionTypes';

//storing your battletag, auth0 uid.
export const createUserNode = (uidOBJ) => {
    return function (dispatch) {
        axios.post('/api/createuser/', uidOBJ)
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

//fetches all accounts matching your uid 
export const getAccounts = uid => {
    return function (dispatch) {
        axios.get(`/api/getaccounts/` + uid)
            .then(data => {
                dispatch(getAccountsSuccess(data.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
};
export const getAccountsSuccess = data => {
    return {
        type: actionTypes.GET_ACCOUNTS_SUCCESS,
        data: data,
    }
}