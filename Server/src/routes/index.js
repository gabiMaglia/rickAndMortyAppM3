const express = require("express");
const router = express.Router();

const getCharByIdController = require("../controllers/GetCharById");
const { postFavController, deleteFavController, clearFavController } = require("../controllers/handleFavorites");
const loginController = require("../controllers/login");
const { findAllEpisodes, createEpisode } = require("../controllers/handleEpisodes");
const postUser = require("../controllers/postUser");

router
  .get("/character/:id", getCharByIdController)
  .get("/login", loginController)
  .post("/user", postUser)
  .post("/episodes", createEpisode)
  .get("/episodes", findAllEpisodes)
  .post("/fav", postFavController)
  .delete("/fav/:id", deleteFavController)
  .delete("/fav", clearFavController);

module.exports = router;
