
import actionTypes from './actionTypes';
export const selectAccount = data => {
    return {
        type: actionTypes.SELECT_ACCOUNT,
        data: data
    }
};
