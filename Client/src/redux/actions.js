export const ADD_FAVORITE = "addFav";
export const REMOVE_FAVORITE = "removeFav";
export const CLEAR_FAVORITE = "clearFav";
export const FILTER = "filterFav";
export const ORDER = "orderFav";
export const GET_FAVORITE = 'getFav'

import {
  postFavService,
  removeFavService,
  clearFavService,
  getFavServices,
} from "../services/apiCall";

const getFavFromDb = () => {
  return (dispatch) => {
    getFavServices().then((data)=> {
      console.log(data)
      return dispatch({
        type: GET_FAVORITE,
        payload: data
      })
    })
  }
}

const addFav = (character) => {
  return (dispatch) => {
    postFavService(character).then((data) => {
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    });
  };
};

const removeFav = (id) => {
  return (dispatch) => {
    removeFavService(id).then((data) => {
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    });
  };
};
const clearFav = () => {
  return (dispatch) => {
    clearFavService().then((data) => {
      return dispatch({
        type: CLEAR_FAVORITE,
        payload: data,
      });
    });
  };
};

const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export {getFavFromDb, addFav, removeFav, clearFav, filterCards, orderCards };
