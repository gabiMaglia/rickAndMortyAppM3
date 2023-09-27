const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const makeCharacterDetail = (data) => {
  const { name, gender, species, origin, image, status } = data;
  const dataObj = {
    id: id,
    name,
    gender,
    species,
    origin: origin.name,
    image,
    status,
  };
  return dataObj;
};

const getCharById = (req, res) => {
  const id = req.params.id;

  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.error) res.status(404).send("Not Found");

      const dataObj = makeCharacterDetail(data);
      return res.json(dataObj);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


module.exports = {
    getCharById
}
