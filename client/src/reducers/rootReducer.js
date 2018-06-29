import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accounts from './accountsReducer';
import activeAccount from './activeAccountReducer';
import initialState from './initialState'
const rootReducer = combineReducers({
  // initialState,
  showModal,
  accounts,
  activeAccount
});

export default rootReducer;
