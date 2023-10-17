require("dotenv").config();
const { Sequelize } = require("sequelize");
const favoritesModel = require("./models/Favorites");
const userModel = require("./models/User");
const episodeModel = require("./models/Episode");
const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, BDD } = process.env;
// const character = require('./models/character')

// DB Conection
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${Number(DB_PORT)}/${BDD}`,
  { logging: false }
);

// Model implementation
favoritesModel(sequelize);
userModel(sequelize);
episodeModel(sequelize);

const { Favorites, User, Episodes } = sequelize.models;

Favorites.belongsToMany(User, { through: "user_favorite" });
User.belongsToMany(Favorites, { through: "user_favorite" });

Favorites.belongsToMany(Episodes, { through: "fav_episodes" });
Episodes.belongsToMany(Favorites, { through: "fav_episodes" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
