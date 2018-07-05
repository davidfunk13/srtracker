import axios from 'axios';
import actionTypes from './actionTypes';

export const saveSeasonSuccess = data => {
    return {
        type: actionTypes.SAVE_SEASON_SUCCESS,
        data: data
    }
}
export const saveSeason = data => {
    console.log(data)
    return function (dispatch) {
        axios.post(`/api/saveseason/`, data).then(data => {
            dispatch(saveSeasonSuccess(data.data))
        }).catch(error => {
            console.log(error);
        })
    }
}
export const getSeasons = data => {
    return function (dispatch) {
        axios.get('/api/getseasons/' + data).then(data => {
            // dispatch(getSeasonsSuccess(data.data));
            console.log(data)
        }).catch(error => {
            console.log(error);
        })
    }
}
export const getSeasonsSuccess = data => {
    return {
        type: actionTypes.REFRESH_ACTIVE_ACCOUNT,
        data: data
    }
}

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

