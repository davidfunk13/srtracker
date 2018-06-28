// import Auth from '../Auth';
import actionTypes from './actionTypes';

export function openModal() {
    return {
        type: actionTypes.OPEN_MODAL,
    }
}

export function closeModal() {
    return {
        type: actionTypes.CLOSE_MODAL,
    }
}
