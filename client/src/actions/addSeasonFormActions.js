import axios from 'axios';
import actionTypes from './actionTypes';

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
export const nextStepForm = () => {
    return {
        type: actionTypes.NEXT_STEP_FORM,
    }
}