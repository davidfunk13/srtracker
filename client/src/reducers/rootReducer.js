// import { combineReducers } from 'redux';
import showModal from "./modalReducer";
import accounts from "./accountsReducer";
import activeAccount from "./activeAccountReducer";
import addSeasonForm from "./addSeasonFormReducer";
import addGameForm from "./addGameFormReducer";

const rootReducer = {
  showModal,
  accounts,
  activeAccount,
  addSeasonForm,
  addGameForm,
};

export default rootReducer;
