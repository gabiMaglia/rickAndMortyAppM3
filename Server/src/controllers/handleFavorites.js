const { favorites } = require("../db");

const getFavsController = async (req, res) => {
try {
  const allFavs = await favorites.findAll();
  return res.status(200).json(allFavs)
} catch (error) {
  return res.status(500).send(error.message);
}
}

const postFavController = async (req, res) => {
  try {
    const { id, name, gender, species, origin, image, status } = req.body;
  
    if (!req.body) {
      return res.status(401).send("Faltan datos");
    } else {
      
      await favorites.findOrCreate({
        where:{ id: id },
        defaults :{
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,}
      });
      const updatedList = await favorites.findAll();
      return res.status(200).json(updatedList);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFavController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCharacter = await favorites.findByPk(id);
    if (deleteCharacter) await deleteCharacter.destroy();
    const updatedList = await favorites.findAll();
    return res.status(200).json(updatedList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const clearFavController = async (req, res) => {
  try {
    await favorites.destroy({
      where: {},
    });
    const updatedList = await favorites.findAll();
    return res.status(200).json(updatedList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getFavsController,
  postFavController,
  deleteFavController,
  clearFavController,
};
