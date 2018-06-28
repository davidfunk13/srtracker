import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accountsReducer from './accountsReducer';

const rootReducer = combineReducers({
  showModal,
  accountsReducer
});

export default rootReducer;
