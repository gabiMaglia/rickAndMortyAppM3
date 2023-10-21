const express = require("express");
const router = express.Router();

const getCharByIdController = require("../controllers/GetCharById");
const { postFavController, deleteFavController, clearFavController } = require("../controllers/handleFavorites");
const loginController = require("../controllers/login");
const { findAllEpisodes, createEpisode } = require("../controllers/handleEpisodes");
const {postUser, getUsers }= require("../controllers/UserHandle");

router
  .get("/character/:id", getCharByIdController)
  .get("/episodes", findAllEpisodes)
  .get("/getUsers", getUsers)
  .post("/login/", loginController)
  .post("/newUser", postUser)
  .post("/episodes", createEpisode)
  .post("/fav", postFavController)
  .delete("/fav/:id", deleteFavController)
  .delete("/fav", clearFavController);

module.exports = router;
