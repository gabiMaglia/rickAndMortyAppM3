export const ADD_FAVORITE = "addFav";
export const REMOVE_FAVORITE = "removeFav";
export const CLEAR_FAVORITE = "clearFav";
export const FILTER = "filterFav";
export const ORDER = "orderFav";
import axios from 'axios'
import { postFavService, removeFavService } from '../services/apiCall'


const addFav = (character) => {
  return (dispatch) => {
    axios.post(`${import.meta.env.VITE_API_ADDRES}/fav`, character).then(({ data }) => {
      return dispatch({
         type: ADD_FAVORITE,
         payload: data,
      });
    });
  };
  // postFavService(character)
  // return { type: ADD_FAVORITE, payload: character };
};

const removeFav = (id) => {
  return (dispatch) => {
    axios.delete(`${import.meta.env.VITE_API_ADDRES}/fav/${id}`).then(({ data }) => {
       return dispatch({
          type: REMOVE_FAVORITE,
          payload: data,
    });
    });
 };

  // removeFavService(id)
  // return { type: REMOVE_FAVORITE, payload: Number(id) };
};
const clearFav = () => {
  return { type: CLEAR_FAVORITE };
};

const filterCards = (gender) => {
  return {type: FILTER, payload: gender}
}
const orderCards = (order) => {
  return {type: ORDER, payload: order}

}

export { addFav, removeFav, clearFav, filterCards, orderCards };
