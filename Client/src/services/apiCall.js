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
      `${import.meta.env.VITE_API_ADDRES}/character`
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
      `${
        import.meta.env.VITE_API_ADDRES
      }/login/?email=${email}&password=${password}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postFavService =  (data) => {

 
 
};

export const removeFavService = async (id) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_ADDRES}/fav/${id}`);
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
