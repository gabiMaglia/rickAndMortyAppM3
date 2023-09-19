
export const fetchCharacterById = async (id) => {
  /**
   * This function fetch a chracter by id
   * @param {number} id -
   * @returns {Promise}
  */
    try {
      // const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const response = await fetch(`http://localhost:3001/rickandmorty/character/${id}`);
      const data = await response.json();
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
      // const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const response = await fetch(`http://localhost:3001/rickandmorty/character`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };