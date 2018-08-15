// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import currentUser from './currentUserReducer';
import currentBattletag from './currentBattletagReducer';


const rootReducer = {
  showModal,
  currentUser,
  currentBattletag,
};

export default rootReducer;
