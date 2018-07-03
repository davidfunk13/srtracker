import axios from 'axios';
import actionTypes from './actionTypes';

//storing your battletag, auth0 uid.
export const selectAccount = data => {
    console.log(data)
    let id = data._id;
    console.log(id)
    return function (dispatch) {
        // console.log(uid)
        axios.get(`/api/selectaccount/` + id).then(data => {
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
// export const saveSeason = data => {
//     return function (dispatch) {
//         axios.post('/api/saveseaon/' + data).then(data => {
//             dispatch(saveSeasonSuccess(data.data))
//         }).catch(error => {
//             console.log(error);
//         })
//     }
// }
// export const saveSeasonSuccess = data => {
//     return {
//         type: actionTypes.SAVE_SEASON_SUCCESS,
//         data: data
//     }
// }