import axios from 'axios';
import actionTypes from './actionTypes';

export const getSeasons = id => {
    return function(dispatch) {
      axios
        .get(`/api/getseasons/`+ id)
        .then(data => {
            dispatch(getSeasonsSuccess(data.data));
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  export const getSeasonsSuccess = data => {
      return {
          type: actionTypes.GET_SEASONS_SUCCESS,
          data: data,
      }
  }