import axios from "axios";

export const fetchCharacterById = async (id) => {
  /**
   * This function fetch a chracter by id
   * @param {number} id -
   * @returns {Promise}
   */
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_ADDRES}/character/${id}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    return JSON.parse(error.request.response);
  }
};

export const fetchMaxCharacters = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_ADDRES}/maxChar`
    );
    return response.data;
  } catch (error) {
    return JSON.parse(error.request.response);
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
      `${import.meta.env.VITE_API_ADDRES}/character`
    );
    const data = response.json();
    return data;
  } catch (error) {
    return JSON.parse(error.request.response);
  }
};

export const loginService = async (email, password) => {
  try {
    const response = await axios.post(
      `${
        import.meta.env.VITE_API_ADDRES
      }/login?email=${email}&password=${password}`
    );

    return response.data;
  } catch (error) {
    const response = error.request;
    return response;
  }
};
export const singInService = async (
  first_name,
  last_name,
  user_email,
  user_handle,
  user_password
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_ADDRES}/newuser`,
      {
        first_name,
        last_name,
        user_email,
        user_handle,
        user_password,
      }
    );
    return response.data;
  } catch (error) {
    return error.request;
  }
};

export const postFavService = async (character) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_ADDRES}/fav`,
      character
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const removeFavService = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_ADDRES}/fav/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
export const clearFavService = async () => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_ADDRES}/fav`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
