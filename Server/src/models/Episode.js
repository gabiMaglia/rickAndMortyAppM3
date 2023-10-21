const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "episodes",
    {
      id_episode: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      episode_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      episode_airDate: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      episode_characters: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamp: false,
    }
  );
};
