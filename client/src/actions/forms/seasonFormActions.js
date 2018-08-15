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
export const resetSeasonForm = () => {
    return {
        type: actionTypes.RESET_SEASON_FORM,
    }
}