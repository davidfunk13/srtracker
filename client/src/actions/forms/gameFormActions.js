import axios from 'axios';
import actionTypes from '../actionTypes';

export const setMatchMap = matchMap => {
    return {
        type: actionTypes.SET_MATCH_MAP,
        data: matchMap,
    }
}
export const setHeroSelected = heroSelected => {
    return {
        type: actionTypes.SET_HERO_SELECTED,
        data: heroSelected,
    }
}
export const setDidYouwin = didYouWin => {
    return {
        type: actionTypes.SET_DID_YOU_WIN,
        data: didYouWin,
    }
}
export const setPostMatchSR = postMatchSR => {
    return {
        type: actionTypes.SET_POST_MATCH_SR,
        data: postMatchSR,
    }
}
export const nextStepGameForm = () => {
    return {
        type: actionTypes.NEXT_STEP_GAME_FORM,
    }
}
export const saveGame = gameData => {
    return function (dispatch) {
        console.log(gameData)
        axios.post('/api/game/create/', gameData).then(game => {
            if (game) {
                dispatch(saveGameSuccess(game.data))
            } else {
                dispatch(saveGameFailure(game.data))
            }
        })
    }
}
export const saveGameSuccess = (success) => {
    return {
        type: actionTypes.SAVE_GAME_SUCCESS,
        data: success
    }
}
export const saveGameFailure = (failure) => {
    return {
        type: actionTypes.SAVE_GAME_FAILURE,
        data: failure
    }
}
export const resetGameForm = () => {
    return {
        type: actionTypes.RESET_GAME_FORM,
    }
}