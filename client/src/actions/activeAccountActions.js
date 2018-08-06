import axios from 'axios';
import actionTypes from './actionTypes';

//storing your battletag, auth0 uid.

export const selectAccount = uid => {
    return {
        type: actionTypes.SELECT_ACCOUNT,
        data: uid,
    }
}
export const selectSeason = seasonId => {
    return {
        type: actionTypes.SELECT_SEASON,
        data: seasonId,
    }
}

export const getActiveSeason = activeSeasonId => {
    return function (dispatch){
        console.log(activeSeasonId)
        axios.get('/api/activeseason/' + activeSeasonId).then(data => {
            dispatch(getActiveSeasonSuccess(data.data))
        }).catch(err => {
            dispatch(getActiveSeasonFailure(err));
        })
    }
}
export const getActiveAccount = activeAccountId => {
    return function (dispatch){
        console.log(activeAccountId)
        axios.get('/api/activeaccount/' + activeAccountId).then(data => {
            dispatch(getActiveAccountSuccess(data.data))
        }).catch(err => {
            dispatch(getActiveAccountFailure(err));
        })
    }
}
export const getActiveAccountSuccess = getActiveAccountSuccessData => {
    return {
        type: actionTypes.GET_ACTIVE_ACCOUNT_SUCCESS,
        data: getActiveAccountSuccessData,
    }
}
export const getActiveAccountFailure = getActiveAccountError => {
    return{
        type: actionTypes.GET_ACTIVE_ACCOUNT_FAILURE,
        error: getActiveAccountError,
    }
}
export const getActiveSeasonSuccess = getActiveSeasonSuccessData => {
    return {
        type: actionTypes.GET_ACTIVE_SEASON_SUCCESS,
        data: getActiveSeasonSuccessData,
    }
}
export const getActiveSeasonFailure = getActiveSeasonError => {
    return{
        type: actionTypes.GET_ACTIVE_SEASON_FAILURE,
        error: getActiveSeasonError,
    }
}
export const saveSeason = seasonData => {
    console.log(seasonData)
return function (dispatch) {
    axios.post('/api/saveseason/', seasonData).then(data => {
        dispatch(saveSeasonSuccess(data.data))
    }).catch(err => {
        dispatch(saveSeasonFailure(err.data));
    })
}
}
export const saveSeasonSuccess = seasonSuccesData => {
    return {
        type: actionTypes.SAVE_SEASON_SUCCESS,
        data: seasonSuccesData,
    }
}
export const saveSeasonFailure = seasonFailureData => {
    return {
        type: actionTypes.SAVE_SEASON_FAILURE,
        data: seasonFailureData,
    }
}
export const saveGame = gameData => {
    console.log(gameData)
return function (dispatch) {
    axios.post('/api/savegame/', gameData).then(data => {
        dispatch(saveGameSuccess(data.data))
    }).catch(err => {
        dispatch(saveGameFailure(err.data));
    })
}
}
export const saveGameSuccess = gameSuccessData => {
    return {
        type: actionTypes.SAVE_GAME_SUCCESS,
        data: gameSuccessData,
    }
}
export const saveGameFailure = gameFailureData => {
    return {
        type: actionTypes.SAVE_GAME_FAILURE,
        data: gameFailureData,
    }
}
export const deleteAccount = activeAccountId => {
    return function (dispatch){
        console.log(activeAccountId)
        axios.get('/api/deleteaccount/' + activeAccountId).then(data => {
            dispatch(deleteAccountSuccess(data.data))
        }).catch(err => {
            dispatch(deleteAccountFailure(err));
        })
    }
}
export const deleteAccountSuccess = deleteAccountSuccessData => {
    return {
        type: actionTypes.DELETE_ACCOUNT_SUCCESS,
        data: deleteAccountSuccessData,
    }
}
export const deleteAccountFailure = deleteAccountError => {
    return{
        type: actionTypes.DELETE_ACCOUNT_FAILURE,
        error: deleteAccountError,
    }
}