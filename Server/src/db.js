require("dotenv").config();
const { Sequelize } = require("sequelize");
const favoritesModel = require("./models/Favorites");
const userModel = require("./models/User");
const episodeModel = require("./models/Episode");
const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, BDD } = process.env;

// DB Conection
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${Number(DB_PORT)}/${BDD}`,
  { logging: false }
);

// Model implementation
favoritesModel(sequelize);
userModel(sequelize);
episodeModel(sequelize);

const { favorites, user, episodes } = sequelize.models;

favorites.belongsToMany(user, { through: "user_favorite" });
user.belongsToMany(favorites, { through: "user_favorite" });

favorites.belongsToMany(episodes, { through: "fav_episodes" });
episodes.belongsToMany(favorites, { through: "fav_episodes" });



module.exports = {
  sequelize,
  ...sequelize.models,
};
