// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import currentUser from './currentUserReducer';
import currentBattletag from './currentBattletagReducer';
import seasonForm from './forms/seasonFormReducer';
import currentSeason from './currentSeasonReducer';


const rootReducer = {
  showModal,
  currentUser,
  currentBattletag,
  currentSeason,
  seasonForm
};

export default rootReducer;
