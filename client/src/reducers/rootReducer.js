import { combineReducers } from 'redux';
import showModal from './modalReducer';
import accounts from './accountsReducer';
import activeAccount from './activeAccountReducer';
import addSeasonForm from './addSeasonFormReducer';


const rootReducer = 
// combineReducers(
  {
  showModal,
  accounts,
  activeAccount,
  addSeasonForm,
}
// );

export default rootReducer;
