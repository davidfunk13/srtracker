const actions = {
  //modal actions
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  //account fetching handler actions
  GET_ACCOUNTS_SUCCESS: "GET_ACCOUNTS_SUCCESS",
  //stores battletag and your auth0uid
  CREATE_USER_NODE: "CREATE_USER_NODE",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILURE: "CREATE_USER_FAILURE",
  //save battletag
  CREATE_BATTLETAG_SUCCESS: 'CREATE_BATTLETAG_SUCCESS',
  CREATE_BATTLETAG_FAILURE: 'CREATE_BATTLETAG_FAILURE',
  //selecting specific account to pass id to /accounts.jsx
  SELECT_ACCOUNT: "SELECT_ACCOUNT",
  //fetching specific acct from db with id from SELECT_ACCOUNT
  GET_ACTIVE_ACCOUNT_SUCCESS: "GET_ACTIVE_ACCOUNT_SUCCESS",
  GET_ACTIVE_ACCOUNT_FAILURE: "GET_ACTIVE_ACCOUNT_SUCCESS",
  //selecting specific season to pass id to /season.jsx
  SELECT_SEASON: "SELECT_SEASON",
  //fetching specific acct from db with id from SELECT_ACCOUNT
  GET_ACTIVE_SEASON_SUCCESS: "GET_ACTIVE_SEASON_SUCCESS",
  GET_ACTIVE_SEASON_FAILURE: "GET_ACTIVE_SEASON_FAILURE",
  //SEASON FORM
  NEXT_STEP_SEASON_FORM: "NEXT_STEP_SEAON_FORM",
  SET_STARTING_SR: "SET_STARTING_SR",
  SET_HEROS_FOCUSED: "SET_HEROS_FOCUSED",
  //SEASON ACTIONS
  SAVE_SEASON_SUCCESS: "SAVE_SEASON_SUCCESS",
  SAVE_SEASON_FAILURE: "SAVE_SEASON_FAILURE",
  //GAME FORM
  NEXT_STEP_GAME_FORM: "NEXT_STEP_GAME_FORM",
  SET_MATCH_MAP: "SET_MATCH_MAP",
  SET_HERO_SELECTED: "SET_HERO_SELECTED",
  SET_DID_YOU_WIN: "SET_DID_YOU_WIN",
  SET_POST_MATCH_SR: "SET_POST_MATCH_SR",
  //SAVE GAME TO SEASON TETHERED BY SEASON ID
  SAVE_GAME_SUCCESS: 'SAVE_GAME_SUCCESS',
  SAVE_GAME_FAILURE: 'SAVE_GAME_FAILURE',
  //Push focused hero to array:
  SELECT_FOCUSED_HERO: 'SELECT_FOCUSED_HERO',
  SELECT_FOCUSED_HERO_SUCCESS: 'SELECT_FOCUSED_SUCCESS',
  SELECT_FOCUSED_HERO_FAILURE: 'SELECT_FOCUSED_HERO_FAILURE',
  //reset the season form
  RESET_SEASON_FORM: 'RESET_SEASON_FORM',
  //Deleting account
  DELETE_BATTLETAG_SUCCESS: 'DELETE_BATTLETAG_SUCCESS',
  //purge current user on logout
  USER_REDUCER_PURGE: 'USER_REDUCER_PURGE',
  //purge current accounts on logout
  ACCOUNTS_REDUCER_PURGE: 'ACCOUNTS_REDUCER_PURGE',
};
export default actions;
