import axios from 'axios';
import actionTypes from '../actionTypes';

export const setStartingSR = StartingSR => {
    return {
        type: actionTypes.SET_STARTING_SR,
        data: StartingSR,
    }
}
export const setHerosFocused = HerosFocused => {
    return {
        type: actionTypes.SET_HEROS_FOCUSED,
        data: HerosFocused,
    }
}
export const nextStepSeasonForm = () => {
    return {
        type: actionTypes.NEXT_STEP_SEASON_FORM,
    }
}
export const saveSeason = (seasonData) => {
    return function (dispatch) {
        console.log(seasonData)
        axios.post('/api/season/create/', seasonData).then(season => {
            if (season) {
                dispatch(saveSeasonSuccess(season.data))
            } else {
                dispatch(saveSeasonFailure(season.data))
            }
        })
    }
}
export const saveSeasonSuccess = (success) => {
    return {
        type: actionTypes.SAVE_SEASON_SUCCESS,
        data: success
    }
}
export const saveSeasonFailure = (failure) => {
    return {
        type: actionTypes.SAVE_SEASON_FAILURE,
        data: failure
    }
}
export const resetSeasonForm = () => {
    return {
        type: actionTypes.RESET_SEASON_FORM,
    }
}