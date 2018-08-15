// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import currentUser from './currentUserReducer';
import currentBattletag from './currentBattletagReducer';
import seasonForm from './forms/seasonFormReducer';


const rootReducer = {
  showModal,
  currentUser,
  currentBattletag,
  seasonForm
};

export default rootReducer;
