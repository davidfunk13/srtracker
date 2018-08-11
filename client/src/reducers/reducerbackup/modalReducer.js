import actionTypes from '../actions/actionTypes';

const initialState = {
  showModal: false,
}

export default function modalReducer(state = initialState.showModal, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return true
    case actionTypes.CLOSE_MODAL:
      return false
    default:
      {
        return state;
      }
  }
}