import axios from 'axios';
import actionTypes from './actionTypes';

//storing your battletag, auth0 uid.
export const createUserSuccess = (data) => {
    return {
        type: actionTypes.CREATE_USER_SUCCESS,
        data: data,
    }
}
export const createUserFailure = (error) => {
    return{
        type: actionTypes.CREATE_USER_FAILURE,
        error: error,
    }
}
export const createUserNode = (uidOBJ) => {
    return function(dispatch) {
        axios.post('/api/createuser/', uidOBJ)
            .then(data => {
                dispatch(createUserSuccess(data.data));
            })
            .catch(error => {
                dispatch(createUserFailure(error))
            });
    };
};
 //fetches all accounts matching your uid 
export const getAccounts = uid => {
    return function(dispatch) {
        // console.log(uid)
      axios
        .get(`/api/getaccounts/`+ uid)
        .then(data => {
            dispatch(getAccountsSuccess(data.data));
        })
        .catch(error => {
            // dispatch(saveAccountFailure(error));
          console.log(error);
        });
    }
  };
  export const getAccountsSuccess = data => {
    //   console.log(data)
    return {
        type: actionTypes.GET_ACCOUNTS_SUCCESS,
        data: data,
    }
}
export const selectAccount = data => {
    console.log(data)
    let id = data._id;
    console.log(id)
    return function(dispatch) {
        // console.log(uid)
      axios
        .get(`/api/selectaccount/`+ id)
        .then(data => {
            dispatch(selectAccountSuccess(data.data));
        })
        .catch(error => {
            // dispatch(saveAccountFailure(error));
          console.log(error);
        });
    }
  };
  export const selectAccountSuccess = data => {
    return {
        type: actionTypes.SELECT_ACCOUNT_SUCCESS,
        data: data,
    }
}