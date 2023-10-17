const express = require("express");
const router = express.Router();

const getCharByIdController = require("../controllers/GetCharById");
const handleFavoritesController = require("../controllers/handleFavorites");
const loginController = require("../controllers/login");
const episodesController = require("../controllers/handleEpisodes");


router
  .get("/character/:id", getCharByIdController.getCharByIdController)
  .get("/login", loginController.loginController)
  .get("/episodes", episodesController.findAllEpisodes)
  .post ("/episodes", episodesController.createEpisode)
  .post("/fav", handleFavoritesController.postFavController)
  .delete("/fav/:id", handleFavoritesController.deleteFavController)
  .delete("/fav", handleFavoritesController.clearFavController);

module.exports = router;
