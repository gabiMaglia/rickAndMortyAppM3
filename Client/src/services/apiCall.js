import axios from "axios";
const url = import.meta.env.VITE_API_ADDRES;

export const fetchCharacterById = async (id) => {
  /**
   * This function fetch a chracter by id
   * @param {number} id -
   * @returns {Promise}
   */
  try {
    const response = await fetch(
      `${url}/character/${id}`
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
      `${url}/maxChar`
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
      `${url}/character`
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
        url
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
  user_password
) => {
  try {
    const response = await axios.post(
      `${url}/newuser`,
      {
        first_name,
        last_name,
        user_email,
        user_password,
      }
    );
    return response.data;
  } catch (error) {
    return error.request;
  }
};

export const getFavServices = async () => {
  try {
    const response = await axios.get(
      `${url}/fav`,
    );
    return response.data;
    
  } catch (error) {
    throw Error(error);
    
  }
}

export const postFavService = async (character) => {
  try {
    console.log(character)
    const response = await axios.post(
      `${url}/fav`,
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
      `${url}/fav/${id}`
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
      `${url}/fav`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
