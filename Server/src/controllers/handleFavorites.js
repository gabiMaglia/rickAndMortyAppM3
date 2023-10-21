const { favorites } = require("../db");

const postFavController = async (req, res) => {
  try {
    const { id, name, gender, species, origin, image, status } = req.body;
    console.log(origin);
    if (!req.body) {
      return res.status(401).send("Faltan datos");
    } else {
      await favorites.create({
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
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

    if (deleteCharacter) deleteCharacter.destroy();

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
  postFavController,
  deleteFavController,
  clearFavController,
};
