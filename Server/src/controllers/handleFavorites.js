let myFavorites = [];

const postFavController = (req, res) => {
  const newChracter = req.body;
  myFavorites.push(newChracter);
  res.json(myFavorites);
};
const deleteFavController = (req, res) => {
  const { id } = req.param;
  myFavoritesUpdated = myFavorites.filter((e) => e.id !== id);
  myFavorites = myFavoritesUpdated;
  res.json(myFavoritesUpdated);
};

module.exports = {
  postFavController,
  deleteFavController,
};
