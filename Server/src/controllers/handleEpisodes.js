const { Episode } = require("../db");

const findAllEpisodes = async (req, res) => {
  try {
    const response = await Episode.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const createEpisode = async(req, res ) => {
 try {
     const {name} = req.body
     console.log(name)
     const response = await Episode.create({name})
     res.status(201).json(response)
 } catch (error) {
    res.status(500).send(error.message);
 }

}


module.exports = {
  findAllEpisodes,
  createEpisode
};
