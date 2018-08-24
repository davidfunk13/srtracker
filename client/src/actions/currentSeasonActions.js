import axios from "axios";
import actionTypes from "./actionTypes";


export const selectSeason = seasonId => {
  console.log(seasonId);
  return function (dispatch) {
    axios.get("/api/season/" + seasonId).then(season => {
      console.log(season.data);
      if (season.data) {
        dispatch(selectSeasonSuccess(season.data.payload));
      } else {
        dispatch(selectSeasonFailure(season.data));
      }
    });
  };
};
export const selectSeasonSuccess = success => {
  return {
    type: actionTypes.SELECT_SEASON_SUCCESS,
    data: success
  };
};
export const selectSeasonFailure = failure => {
  return {
    type: actionTypes.SELECT_SEASON_FAILURE,
    data: failure
  };
};
export const deleteGame = (gameId) => {
  console.log(gameId)
  return function (dispatch) {
    axios.get('/api/games/remove/', {
      params: gameId
    }).then(result => {
      console.log('Returned after removal')
      console.log(result)
      if (result) {
        dispatch(deleteGameSuccess(result.data.payload))
      } else {
        dispatch(deleteGameFailure(result.data))
      }
    }).catch(err => {
      console.log(err)
    })
  };
}
export const deleteGameSuccess = success => {
  return {
    type: actionTypes.DELETE_GAME_SUCCESS,
    data: success
  }
};
export const deleteGameFailure = failure => {
  return {
    type: actionTypes.DELETE_GAME_FAILURE,
    data: failure
  }
};