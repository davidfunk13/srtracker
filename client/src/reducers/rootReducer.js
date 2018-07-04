import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accounts from './accountsReducer';
import activeAccount from './activeAccountReducer';
import addSeasonForm from './seasonReducer';
import activeSeason from './activeSeasonReducer';
const rootReducer = combineReducers({
  // initialState,
  showModal,
  accounts,
  activeAccount,
  addSeasonForm,
  activeSeason,
});

export default rootReducer;
