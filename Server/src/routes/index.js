const express = require("express");
const router = express.Router();

const getCharByIdController = require("../controllers/GetCharById");
const handleFavoritesController = require("../controllers/handleFavorites");
const loginController = require("../controllers/login");

router
  .get("/character/:id", getCharByIdController.getCharByIdController)
  .get("/login", loginController.loginController)
  .post("/fav", handleFavoritesController.postFavController)
  .delete("/fav/:id", handleFavoritesController.deleteFavController);
  
module.exports = router;
