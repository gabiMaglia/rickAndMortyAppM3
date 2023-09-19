export const ADD_FAVORITE = "addFav";
export const REMOVE_FAVORITE = "removeFav";
export const CLEAR_FAVORITE = "clearFav";
export const FILTER = "filterFav";
export const ORDER = "orderFav";

const addFav = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

const removeFav = (id) => {
 
  return { type: REMOVE_FAVORITE, payload: Number(id) };
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
