// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import currentUser from './currentUserReducer';


const rootReducer = {
  showModal,
  currentUser,
};

export default rootReducer;
