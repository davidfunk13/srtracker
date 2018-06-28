import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accounts from './accountsReducer';
import initialState from './initialState'
const rootReducer = combineReducers({
  initialState,
  showModal,
  accounts
});

export default rootReducer;
