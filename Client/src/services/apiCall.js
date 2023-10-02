import axios from "axios";

export const fetchCharacterById = async (id) => {
  /**
   * This function fetch a chracter by id
   * @param {number} id -
   * @returns {Promise}
   */
  try {
 
    const response = await fetch(
      `http://localhost:3001/rickandmorty/character/${id}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchAllData = async () => {
  /**
   * This function fetchs all chracters
   *
   * @returns {Promise}
   */
  try {

    const response = await fetch(
      `http://localhost:3001/rickandmorty/character`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginService = async (email, password) => {
  try {
    const response = await fetch(
      "http://localhost:3001/rickandmorty/login" +
        `?email=${email}&password=${password}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postFavService = async (data) => {
  try {
   await axios.post("http://localhost:3001/rickandmorty/fav", data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const removeFavService = async (id) => {
  try {
   await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
