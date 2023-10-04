let myFavorites = [];

const postFavController = (req, res) => {
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

const deleteFavController = (req, res) => {
  const { id } = req.params;
  const favsFiltered = myFavorites.filter((char) => {
    return char.id !== Number(id); 
  });

  myFavorites = favsFiltered;
  console.log(myFavorites)
  return res.json(myFavorites);
};


module.exports = {
  postFavController,
  deleteFavController,
};
