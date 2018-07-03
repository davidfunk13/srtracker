// import axios from 'axios';
import actionTypes from './actionTypes';

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
export const setStartingSR = (data) => {
    return {
        type: actionTypes.SET_STARTING_SR,
        data: data
    }
}
export const setHerosFocused = (data) => {
    return {
        type: actionTypes.SET_HEROS_FOCUSED,
        data: data,
    }
}
export const nextStepForm = () => {
    return {
        type: actionTypes.NEXT_STEP_FORM,
    }
}