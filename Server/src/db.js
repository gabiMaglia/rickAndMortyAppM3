require("dotenv").config();
const { Sequelize } = require("sequelize");
const favoritesModel = require("./models/Favorites");
const userModel = require("./models/User");
const episodeModel = require("./models/Episode");
const isProduction = process.env.NODE_ENV === 'production' 
const koyebDb = process.env.KOYEB_DB_DIR
const localDb = process.env.LOCAL_DB_DIR
// DB Conection
const sequelize = new Sequelize(isProduction ? koyebDb : localDb, {
  dialect: "postgres",
  dialectOptions: {
    ssl: isProduction ? { require: true, rejectUnauthorized: false } : false,
  },
  logging: false,
});

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
