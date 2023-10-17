require("dotenv").config();
const { Sequelize } = require("sequelize");
const  characterModel = require('./models/character')
const  episodeModel = require('./models/Episode')
const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, BDD } = process.env;
// const character = require('./models/character')

// DB Conection
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${Number(DB_PORT)}/${BDD}`,
  {logging: false}
);


// Model implementation
characterModel(sequelize)
episodeModel(sequelize)

const {Character, Episode} = sequelize.models;

Character.belongsToMany(Episode, {through : 'CharacterEpisode'})
Episode.belongsToMany( Character, {through : 'CharacterEpisode'} )

module.exports = {
    sequelize,
    ...sequelize.models,
};
