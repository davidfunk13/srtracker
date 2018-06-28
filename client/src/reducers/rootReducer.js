import { combineReducers } from 'redux';
import showModal from './modalReducer';

const rootReducer = combineReducers({
  showModal,
});

export default rootReducer;
