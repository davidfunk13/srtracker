const actions = {
  //modal actions
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  //User Actions
  CREATE_USER: "CREATE_USER",
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_FAILURE: 'CREATE_USER_FAILURE',
  PURGE_CURRENT_USER: 'PURGE_CURRENT_USER',
  //Battletag
  CREATE_BATTLETAG_SUCCESS: 'CREATE_BATTLETAG_SUCCESS',
  CREATE_BATTLETAG_FAILURE: 'CREATE_BATTLETAG_FAILURE',
  //Select Battletag
  SELECT_BATTLETAG_SUCCESS: 'SELECT_BATTLETAG_SUCCESS',
  SELECT_BATTLETAG_FAILURE: 'SELECT_BATTLETAG_FAILURE',
  //Season Form
  //SEASON FORM
  NEXT_STEP_SEASON_FORM: "NEXT_STEP_SEASON_FORM",
  SET_STARTING_SR: "SET_STARTING_SR",
  SET_HEROS_FOCUSED: "SET_HEROS_FOCUSED",
  RESET_SEASON_FORM: "RESET_SEASON_FORM",
  //SEASON ACTIONS
  SAVE_SEASON_SUCCESS: "SAVE_SEASON_SUCCESS",
  SAVE_SEASON_FAILURE: "SAVE_SEASON_FAILURE",
  //Delete Battletag
  DELETE_BATTLETAG_SUCCESS: 'DELETE_BATTLETAG_SUCCESS',
  DELETE_BATTLETAG_FAILURE: 'DELETE_BATTLETAG_FAILURE',
  //SELECT SEASON
  SELECT_SEASON_SUCCESS: "SELECT_SEASON_SUCCESS",
  SELECT_SEASON_FAILURE: "SELECT_SEASON_FAILURE",
  //GAME FORM
  NEXT_STEP_GAME_FORM: "NEXT_STEP_GAME_FORM",
  SET_MATCH_MAP: "SET_MATCH_MAP",
  SET_HERO_SELECTED: "SET_HERO_SELECTED",
  SET_DID_YOU_WIN: "SET_DID_YOU_WIN",
  SET_POST_MATCH_SR: "SET_POST_MATCH_SR",
  RESET_GAME_FORM: "RESET_GAME_FORM",
  //SAVE GAME TO SEASON
  SAVE_GAME_SUCCESS: "SAVE_GAME_SUCCESS",
  SAVE_GAME_FAILURE: "SAVE_GAME_FAILURE",
  //DELETE GAME
  DELETE_GAME_SUCCESS: 'DELETE_GAME_SUCCESS',
  DELETE_GAME_FAILURE: 'DELETE_GAME_FAILURE',
  //DELETE SEASON
  DELETE_SEASON_SUCCESS: 'DELETE_SEASON_SUCCESS',
  DELETE_SEASON_FAILURE: 'DELETE_SEASON_FAILURE',
  // ADJUST SR AFTER GAME ADD
  ADJUST_CURRENT_SR_SUCCESS: 'ADJUST_CURRENT_SR_SUCCESS',
  ADJUST_CURRENT_SR_FAILURE: 'ADJUST_CURRENT_SR_FAILURE',
  //SR GAIN
  SR_GAIN: 'SR_GAIN',
  SR_LOST: 'SR_LOST',
};
export default actions;
