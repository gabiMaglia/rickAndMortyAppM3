let myFavorites = [];

const postFavController = (req, res) => {
  const newChracter = req.body;
  console.log(newChracter)
  myFavorites.push(newChracter);
  res.status(200).json(myFavorites);
};
const deleteFavController = (req, res) => {
  const { id } = req.param;
  myFavoritesUpdated = myFavorites.filter((e) => e.id !== id);
  myFavorites = myFavoritesUpdated;
  res.status(200).json(myFavoritesUpdated);
};

module.exports = {
  postFavController,
  deleteFavController,
};
