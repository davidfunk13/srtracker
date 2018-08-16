import axios from "axios";
import actionTypes from "./actionTypes";

//Create Battletag
export const createBattletag = battletagObj => {
  console.log(battletagObj);
  return function(dispatch) {
    axios
      .post("/api/battletag/create/", battletagObj)
      .then(data => {
        console.log(data.data);
        dispatch(createBattletagSuccess(data.data));
      })
      .catch(error => {
        dispatch(createBattletagFailure(error));
      });
  };
};
export const createBattletagSuccess = success => {
  return {
    type: actionTypes.CREATE_BATTLETAG_SUCCESS,
    data: success
  };
};
export const createBattletagFailure = failure => {
  return {
    type: actionTypes.CREATE_BATTLETAG_FAILURE,
    data: failure
  };
};

//Select Battletag
export const selectBattletag = battletagId => {
  console.log(battletagId);
  return function(dispatch) {
    axios.get("/api/battletag/" + battletagId).then(battletag => {
      console.log(battletag.data);
      if (battletag.data) {
        dispatch(selectBattletagSuccess(battletag.data.payload));
      } else {
        dispatch(selectBattletagFailure(battletag.data));
      }
    });
  };
};
export const selectBattletagSuccess = success => {
  return {
    type: actionTypes.SELECT_BATTLETAG_SUCCESS,
    data: success
  };
};
export const selectBattletagFailure = failure => {
  return {
    type: actionTypes.SELECT_BATTLETAG_FAILURE,
    data: failure
  };
};

//DELETE BATTLETAG
// export const deleteBattletag = info => {
// return function (dispatch) {
//     axios.get('/api/')
// }
// }
