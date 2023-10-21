const { Episode } = require("../db");

const findAllEpisodes = async (req, res) => {
  try {
    const response = await Episode.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createEpisode = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const response = await Episode.create({ name });
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  findAllEpisodes,
  createEpisode,
};
