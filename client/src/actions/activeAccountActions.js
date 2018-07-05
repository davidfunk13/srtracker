import axios from 'axios';
import actionTypes from './actionTypes';
export const selectAccount = data => {
    return {
        type: actionTypes.SELECT_ACCOUNT,
        data: data
    }
};
export const getActiveAccount = uid => {
    return function (dispatch) {
        axios.get(`/api/refreshactiveaccount/` + uid)
            .then(data => {
                console.log('hay' +data)
                dispatch(getActiveAccountSuccess(data.data));
            })
            .catch(error => {
                console.log(error);
            });
    }
};
export const concatNewSeason = SeasonData => {
    return {
        type: actionTypes.CONCAT_NEW_SEASON,
        data: SeasonData
    }
}
export const getActiveAccountSuccess = data => {
    return {
        type: actionTypes.GET_ACTIVE_ACCOUNT_SUCCESS,
        data: data
    }
}