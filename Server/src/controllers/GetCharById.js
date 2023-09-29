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

const getCharByIdController = (req, res) => {
  const id = req.params.id;

  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.error) res.status(404).send("Not Found");
      const dataObj = makeCharacterDetail(data);
      return res.json(dataObj);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  getCharByIdController,
};
