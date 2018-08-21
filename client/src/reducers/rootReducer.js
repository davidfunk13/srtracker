// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import currentUser from './currentUserReducer';
import currentBattletag from './currentBattletagReducer';
import seasonForm from './forms/seasonFormReducer';
import gameForm from './forms/gameFormReducer';
import currentSeason from './currentSeasonReducer';


const rootReducer = {
  showModal,
  currentUser,
  currentBattletag,
  currentSeason,
  seasonForm,
  gameForm
};

export default rootReducer;
