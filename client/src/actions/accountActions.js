import axios from 'axios';
import actionTypes from './actionTypes';

export const getAccounts = uid => {
    return function(dispatch) {
        // console.log(uid)
      axios
        .get(`/api/getaccounts/`+ uid)
        .then(data => {
            console.log(data)
            dispatch(getAccountsSuccess(data.data));
        })
        .catch(error => {
            // dispatch(saveAccountFailure(error));
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