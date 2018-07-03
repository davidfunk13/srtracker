import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accounts from './accountsReducer';
import activeAccount from './activeAccountReducer';
import initialState from './initialState'
import addSeasonForm from './seasonReducer';
const rootReducer = combineReducers({
  // initialState,
  showModal,
  accounts,
  activeAccount,
  addSeasonForm,
});

export default rootReducer;
