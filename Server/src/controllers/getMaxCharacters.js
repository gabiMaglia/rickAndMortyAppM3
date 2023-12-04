const axios = require("axios");

const getMaxCharacters = async (req, res) => {
  try {
   
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );
    
    if (response.error) return res.status(404).send("Not Found");
    
    return res.status(200).json(response.data.info.count);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getMaxCharacters;
