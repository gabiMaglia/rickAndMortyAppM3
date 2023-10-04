import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_FAVORITE,
  FILTER,
  ORDER,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  /**
   * Reducer.
   * @param {Object} State - the global object.
   */

  switch (type) {
    case ADD_FAVORITE:
      // return {
      //   ...state,
      //   myFavorites: [...state.myFavorites, payload],
      //   allCharacters: [...state.allCharacters, payload],
      // };

      return { ...state, myFavorites: payload, allCharacters: payload };
    case REMOVE_FAVORITE:
      // return {
      //   ...state,
      //   myFavorites: state.myFavorites.filter(
      //     (char) => char.id != payload
      //   ),
      // };

      return { ...state, myFavorites: payload, allCharacters: payload };
    case CLEAR_FAVORITE:
      return {
        ...state,
        myFavorites: [],
      };
    case FILTER:
      return {
        ...state,
        myFavorites: payload === "All"? state.allCharacters : state.allCharacters.filter((e) => e.gender === payload),
      };
    case ORDER:
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => {
          return payload === "A" ? a.id - b.id : b.id - a.id;
        }), //refactor
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
