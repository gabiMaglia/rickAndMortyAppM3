const axios = require("axios");

const makeCharacterDetail = (data) => {
  return {
    id: data.id,
    name: data.name,
    gender: data.gender,
    species: data.species,
    origin: data.origin.name,
    image: data.image,
    status: data.status,
  };
};

const getCharByIdController = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.error) return res.status(404).send("Not Found");
    const dataObj = makeCharacterDetail(response.data);
    return res.status(200).json(dataObj);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getCharByIdController
