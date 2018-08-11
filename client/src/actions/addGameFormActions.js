import actionTypes from './actionTypes';


export const setMatchMap = matchMap => {
    return {
        type: actionTypes.SET_MATCH_MAP,
        data: matchMap,
    }
}
export const setHeroSelected = HeroSelected => {
    return {
        type: actionTypes.SET_HERO_SELECTED,
        data: HeroSelected,
    }
}
export const setDidYouWin = didYouWin => {
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
export const resetGameForm = () => {
    return {
        type: actionTypes.RESET_GAME_FORM,
    }
}